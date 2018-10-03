(function() {
  const video = document.querySelector('.player') as HTMLVideoElement;
  const canvas = document.querySelector('.photo') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const strip = document.querySelector('.strip') as HTMLElement;
  const snap = document.querySelector('.snap') as HTMLAudioElement;
  const button = document.querySelector('#take-photo') as HTMLButtonElement;

  function getVideo(): void {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        console.log(localMediaStream);

        //  DEPRECIATION :
        //       The following has been depreceated by major browsers as of Chrome and Firefox.
        //       video.src = window.URL.createObjectURL(localMediaStream);
        //       Please refer to these:
        //       Depreceated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        //       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

        video.srcObject = localMediaStream;
        video.play();
      })
      .catch(err => {
        console.error(`OH NO!!!`, err);
      });
  }

  function paintToCanvas(): number {
    const width: number = video.videoWidth;
    const height: number = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      // take the pixels out
      let pixels: ImageData = ctx.getImageData(0, 0, width, height);
      // mess with them
      // pixels = redEffect(pixels);

      pixels = rgbSplit(pixels);
      // ctx.globalAlpha = 0.8;

      // pixels = greenScreen(pixels);
      // put them back
      ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  function takePhoto(): void {
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data: string = canvas.toDataURL('image/jpeg');
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild);
  }

  function redEffect(pixels: ImageData): ImageData {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
      pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
  }

  function rgbSplit(pixels: ImageData): ImageData {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }

  enum InputNames {
    rmin,
    rmax,
    gmin,
    gmax,
    bmin,
    bmax
  }

  interface Input {
    rmin: string;
    rmax: string;
    gmin: string;
    gmax: string;
    bmin: string;
    bmax: string;
  }

  type InputName = 'rmin' | 'rmax' | 'gmin' | 'gmax' | 'bmin' | 'bmax';
  type Mapped<T> = { [P in keyof T]?: T[P] };
  type Levels = Mapped<Input>;

  function greenScreen(pixels: ImageData): ImageData {
    const levels: Levels = {};
    const inputs = document.querySelectorAll('.rgb input') as NodeListOf<
      HTMLInputElement
    >;

    inputs.forEach(input => {
      let key: InputName = input.name as InputName;
      levels[key] = input.value;
    });

    for (let i = 0; i < pixels.data.length; i = i + 4) {
      let red = pixels.data[i + 0];
      let green = pixels.data[i + 1];
      let blue = pixels.data[i + 2];
      let alpha = pixels.data[i + 3];

      if (
        levels.rmin &&
        red >= parseFloat(levels.rmin) &&
        (levels.gmin && green >= parseFloat(levels.gmin)) &&
        (levels.bmin && blue >= parseFloat(levels.bmin)) &&
        (levels.rmax && red <= parseFloat(levels.rmax)) &&
        (levels.gmax && green <= parseFloat(levels.gmax)) &&
        (levels.bmax && blue <= parseFloat(levels.bmax))
      ) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }

    return pixels;
  }

  getVideo();

  video.addEventListener('canplay', paintToCanvas);
  button.addEventListener('click', takePhoto);
})();

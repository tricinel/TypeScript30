(function() {
  const slider = document.querySelector('.items') as HTMLElement;
  let isDown: boolean = false;
  let startX: number;
  let scrollLeft: number;

  slider.addEventListener(
    'mousedown',
    (e: MouseEvent): void => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    }
  );

  slider.addEventListener(
    'mouseleave',
    (): void => {
      isDown = false;
      slider.classList.remove('active');
    }
  );

  slider.addEventListener(
    'mouseup',
    (): void => {
      isDown = false;
      slider.classList.remove('active');
    }
  );

  slider.addEventListener(
    'mousemove',
    (e: MouseEvent): void => {
      if (!isDown) {
        return; // stop the fn from running
      }

      e.preventDefault();
      const x: number = e.pageX - slider.offsetLeft;
      const walk: number = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    }
  );
})();

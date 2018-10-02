(function() {
  const speed = document.querySelector('.speed') as HTMLElement;
  const bar = speed.querySelector('.speed-bar') as HTMLElement;
  const video = document.querySelector('.flex') as HTMLVideoElement;

  function handleMove(this: HTMLElement, e: MouseEvent) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
  }
  speed.addEventListener('mousemove', handleMove);
})();

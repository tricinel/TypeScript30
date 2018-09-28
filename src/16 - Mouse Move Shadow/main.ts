(function() {
  const hero = document.querySelector('.hero') as HTMLElement;
  const text = hero.querySelector('h1') as HTMLElement;
  const walk: number = 500; // 500px

  function shadow(this: HTMLElement, e: MouseEvent): void {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    const { offsetTop, offsetLeft } = e.target as HTMLInputElement;
    if (this !== e.target) {
      x = x + offsetLeft;
      y = y + offsetTop;
    }
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
  }

  hero.addEventListener('mousemove', shadow);
})();

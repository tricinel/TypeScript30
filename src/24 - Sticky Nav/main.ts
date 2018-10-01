(function() {
  // Not a ton of code, but hard to
  const nav = document.querySelector('#main') as HTMLElement;
  let topOfNav: number = nav.offsetTop;

  function fixNav(): void {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0 + 'px';
    }
  }
  window.addEventListener('scroll', fixNav);
})();

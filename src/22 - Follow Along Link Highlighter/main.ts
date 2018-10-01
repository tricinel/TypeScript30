(function() {
  const triggers = document.querySelectorAll('a') as NodeListOf<
    HTMLAnchorElement
  >;
  const highlight: HTMLElement = document.createElement('span');

  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  function highlightLink(this: HTMLAnchorElement): void {
    const linkCoords: ClientRect = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  }
  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
})();

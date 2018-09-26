const panels = document.querySelectorAll('.panel') as NodeListOf<HTMLElement>;

function toggleOpen(this: HTMLElement): void {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(this: HTMLElement, e: TransitionEvent): void {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

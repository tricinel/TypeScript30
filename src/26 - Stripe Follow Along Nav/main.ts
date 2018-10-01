(function() {
  const triggers = document.querySelectorAll('.cool > li') as NodeListOf<
    HTMLLIElement
  >;
  const background = document.querySelector(
    '.dropdownBackground'
  ) as HTMLElement;
  const nav = document.querySelector('.top') as HTMLElement;

  interface Coords {
    height: number;
    width: number;
    top: number;
    left: number;
  }

  function handleEnter(this: HTMLElement): void {
    this.classList.add('trigger-enter');
    setTimeout(
      () =>
        this.classList.contains('trigger-enter') &&
        this.classList.add('trigger-enter-active'),
      150
    );
    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown') as HTMLElement;
    const dropdownCoords: ClientRect = dropdown.getBoundingClientRect();
    const navCoords: ClientRect = nav.getBoundingClientRect();
    const coords: Coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty(
      'transform',
      `translate(${coords.left}px, ${coords.top}px)`
    );
  }

  function handleLeave(this: HTMLElement): void {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }

  triggers.forEach(trigger =>
    trigger.addEventListener('mouseenter', handleEnter)
  );
  triggers.forEach(trigger =>
    trigger.addEventListener('mouseleave', handleLeave)
  );
})();

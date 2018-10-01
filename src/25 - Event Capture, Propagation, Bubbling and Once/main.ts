(function() {
  const divs = document.querySelectorAll('div') as NodeListOf<HTMLElement>;
  const button = document.querySelector('button') as HTMLButtonElement;

  function logText(this: HTMLElement): void {
    console.log(this.classList);

    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
  }

  divs.forEach(div =>
    div.addEventListener('click', logText, {
      capture: false,
      once: true
    })
  );

  button.addEventListener(
    'click',
    () => {
      console.log('Click!!!');
    },
    {
      once: true
    }
  );
})();

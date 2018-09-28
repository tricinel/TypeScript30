(function() {
  const checkboxes = document.querySelectorAll(
    '.inbox input[type="checkbox"]'
  ) as NodeListOf<HTMLInputElement>;

  let lastChecked: HTMLInputElement;

  function handleCheck(this: HTMLInputElement, e: MouseEvent): void {
    // Check if they had the shift key down
    // AND check that they are checking it
    let inBetween: boolean = false;
    if (e.shiftKey && this.checked) {
      // go ahead and do what we please
      // loop over every single checkbox
      checkboxes.forEach(
        (checkbox: HTMLInputElement): void => {
          console.log(checkbox);
          if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
            console.log('Starting to check them inbetween!');
          }
          if (inBetween) {
            checkbox.checked = true;
          }
        }
      );
    }
    lastChecked = this;
  }

  checkboxes.forEach(checkbox =>
    checkbox.addEventListener('click', handleCheck)
  );
})();

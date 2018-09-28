(function() {
  const inputs = document.querySelectorAll('.controls input') as NodeListOf<
    HTMLElement
  >;

  function handleUpdate(this: HTMLInputElement): void {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
})();

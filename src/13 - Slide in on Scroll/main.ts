(function() {
  function debounce(
    func: FunctionStringCallback,
    wait: number = 20,
    immediate: boolean = true
  ): EventListenerOrEventListenerObject {
    let timeout: number | undefined;
    return function(this: Window): void {
      let context = this,
        args = arguments;
      let later = function(): void {
        timeout = undefined;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in') as NodeListOf<
    HTMLImageElement
  >;

  function checkSlide(): void {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt =
        window.scrollY + window.innerHeight - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', debounce(checkSlide));
})();

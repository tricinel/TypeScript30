(function() {
  const arrow = document.querySelector('.arrow') as SVGElement;
  const speed = document.querySelector('.speed-value') as HTMLElement;
  navigator.geolocation.watchPosition(
    ({ coords }) => {
      speed.textContent = (coords.speed as number).toString();
      arrow.style.transform = `rotate(${coords.heading}deg)`;
    },
    err => {
      console.error(err);
    }
  );
})();

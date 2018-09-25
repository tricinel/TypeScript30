const secondHand = document.querySelector('.second-hand') as HTMLInputElement;
const minsHand = document.querySelector('.min-hand') as HTMLInputElement;
const hourHand = document.querySelector('.hour-hand') as HTMLInputElement;

const rotate = (element: HTMLInputElement, degrees: number): void => {
  element.style.transform = `rotate(${degrees}deg)`;
};

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  rotate(secondHand, secondsDegrees);

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  rotate(minsHand, minsDegrees);

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  rotate(hourHand, hourDegrees);
}

setInterval(setDate, 1000);

setDate();

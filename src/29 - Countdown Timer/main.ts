(function() {
  let countdown: number;
  const timerDisplay = document.querySelector(
    '.display__time-left'
  ) as HTMLElement;
  const endTime = document.querySelector('.display__end-time') as HTMLElement;
  const buttons = document.querySelectorAll('[data-time]') as NodeListOf<
    HTMLButtonElement
  >;
  const customForm = document.querySelector('#custom') as HTMLFormElement;

  function timer(seconds: number): void {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it!
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      // display it
      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds: number): void {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
      remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
  }

  function displayEndTime(timestamp: number): void {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${
      minutes < 10 ? '0' : ''
    }${minutes}`;
  }

  function startTimer(this: HTMLButtonElement): void {
    const time = this.dataset.time as string;
    const seconds = parseInt(time);
    timer(seconds);
  }

  buttons.forEach(button => button.addEventListener('click', startTimer));

  customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  });
})();

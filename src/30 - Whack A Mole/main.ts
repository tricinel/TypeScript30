(function() {
  const holes = document.querySelectorAll('.hole') as NodeListOf<HTMLElement>;
  const scoreBoard = document.querySelector('.score') as HTMLElement;
  const moles = document.querySelectorAll('.mole') as NodeListOf<HTMLElement>;
  const startGameButton = document.querySelector(
    '#start-game'
  ) as HTMLButtonElement;

  let lastHole: HTMLElement;
  let timeUp = false;
  let score = 0;

  function randomTime(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes: NodeListOf<HTMLElement>): HTMLElement {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep(): void {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = '0';
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => (timeUp = true), 10000);
  }

  function bonk(this: HTMLElement, e: MouseEvent) {
    if (!e.isTrusted) return; // cheater!
    score++;
    (this.parentNode as HTMLElement).classList.remove('up');
    scoreBoard.textContent = score.toString();
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));
  startGameButton.addEventListener('click', startGame);
})();

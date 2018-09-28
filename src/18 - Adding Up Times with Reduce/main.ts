(function() {
  const timeNodes: HTMLElement[] = Array.from(
    document.querySelectorAll('[data-time]')
  );

  const seconds: number = timeNodes
    .map(node => node.dataset.time as string)
    .map(
      (timeCode: string): number => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return mins * 60 + secs;
      }
    )
    .reduce((total: number, vidSeconds: number) => total + vidSeconds, 0);

  let secondsLeft: number = seconds;
  const hours: number = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;
  const mins: number = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  console.log(hours, mins, secondsLeft);
})();

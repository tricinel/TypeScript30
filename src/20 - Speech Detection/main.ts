(function() {
  // All this is very hacky, I will admit
  // TODO: Fix this properly
  interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }

  const { webkitSpeechRecognition }: IWindow = window as IWindow;

  const recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  const transcribe = (e: any) => {
    const transcript = Array.from(e.results)
      .map((result: any) => result[0])
      .map(result => result.transcript)
      .join('');
    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
  };

  let p = document.createElement('p');
  const words = document.querySelector('.words') as HTMLElement;
  words.appendChild(p);
  recognition.addEventListener('result', transcribe);
  recognition.addEventListener('end', recognition.start);
  recognition.start();
})();

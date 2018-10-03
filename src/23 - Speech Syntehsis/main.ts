(function() {
  const msg = new SpeechSynthesisUtterance();
  let voices: SpeechSynthesisVoice[] = [];
  const voicesDropdown = document.querySelector(
    '[name="voice"]'
  ) as HTMLSelectElement;
  const options = document.querySelectorAll(
    '[type="range"], [name="text"]'
  ) as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
  const speakButton = document.querySelector('#speak') as HTMLButtonElement;
  const stopButton = document.querySelector('#stop') as HTMLButtonElement;
  const textarea = document.querySelector(
    '[name="text"]'
  ) as HTMLTextAreaElement;
  msg.text = textarea.value;

  function populateVoices(this: SpeechSynthesis): void {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(
        voice =>
          `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
      )
      .join('');
  }

  function setVoice(this: HTMLSelectElement): void {
    const voice = voices.find(voice => voice.name === this.value);
    msg.voice = voice as SpeechSynthesisVoice;
    toggle();
  }

  function toggle(startOver = true): void {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function setOption(this: HTMLInputElement | HTMLTextAreaElement): void {
    (msg as any)[this.name] = this.value; // This is very hacky, but I honestly couldn't figure out a better way
    toggle();
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', () => toggle());
  stopButton.addEventListener('click', () => toggle(false));
})();

declare var cornify_add: any;
(function() {
  const pressed: string[] = [];
  const secretCode: string = 'wesbos';

  window.addEventListener('keyup', e => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
      console.log('DING DING!');
      cornify_add();
    }
    console.log(pressed);
  });
})();

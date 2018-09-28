(function() {
  const bands: string[] = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
  ];

  function strip(bandName: string): string {
    return bandName.replace(/^(a |the |an )/i, '').trim();
  }

  const sortedBands: string[] = bands.sort(
    (a: string, b: string): 1 | -1 => (strip(a) > strip(b) ? 1 : -1)
  );

  const allBands = document.querySelector('#bands') as HTMLUListElement;

  allBands.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
  console.log(sortedBands);
})();

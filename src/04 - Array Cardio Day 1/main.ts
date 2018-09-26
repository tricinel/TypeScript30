// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
interface Inventor {
  first: string;
  last: string;
  year: number;
  passed: number;
}

const inventors: Inventor[] = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people: string[] = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = (inventor: Inventor): boolean =>
  inventor.year >= 1500 && inventor.year < 1600;
const fifteen = inventors.filter(bornIn1500s);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const composeName = (inventor: Inventor): string =>
  `${inventor.first} ${inventor.last}`;
const fullNames = inventors.map(composeName);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const orderByYear = (a: Inventor, b: Inventor): 1 | -1 =>
  a.year > b.year ? 1 : -1;
const ordered = inventors.sort(orderByYear);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const sumYearsLived = (total: number, inventor: Inventor): number =>
  total + (inventor.passed - inventor.year);
const totalYears = inventors.reduce(sumYearsLived, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const orderByLifeLength = (a: Inventor, b: Inventor): 1 | -1 => {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
};
const oldest = inventors.sort(orderByLifeLength);
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
// 7. sort Exercise
// Sort the people alphabetically by last name
const orderByLastName = (lastOne: string, nextOne: string): 1 | -1 => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
};
const alpha = people.sort(orderByLastName);
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data: string[] = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick'
];

interface Transportation {
  [key: string]: number;
}

const howManyOfEach = (obj: Transportation, item: string): Transportation => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
};
const transportation = data.reduce(howManyOfEach, {});
console.log(transportation);

// 1) Ispisati u konzoli 4 varijable i njihove tipove podataka
// - koristiti najmanje 3 tipa podatka
// - koristiti let ili const za definiranje varijabli

// const broj = 2;
//const tekst = 'Tekst';
const daNe = true;
//const datum = new Date();

//alt + 7 na windows/linux

// console.log(`varijabla je ${broj} a njezin tip je ${typeof broj}`);
// console.log(`varijabla je ${tekst} a njezin tip je ${typeof tekst}`);
// console.log(`varijabla je ${daNe} a njezin tip je ${typeof daNe}`);
// console.log(`varijabla je ${datum} a njezin tip je ${typeof datum}`);

/// 2) napisati 1 petlju i jednu uvjetnu izjavu
// primjer petlje: while, do/while, for, foreach
// primjer uvjetnog izraza: if else, ternarni uvjet  ? :
// unutar uvjeta i petlje ispišite nešto u konzoli

// for petlja

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//naopako

// for (let i = 10; i > 0; i--) {
//  // console.log(i);
// }

//const brojevi = [1, 2, 3, 4];

// for (let i = 0; i < brojevi.length; i++) {
//   console.log(brojevi[i]);
// }

//foreach na arrayu/objektu
//brojevi.forEach((e) => console.log(e));

//uvjeti

if (daNe) {
  //console.log('Izraz je točan');
} else {
  //  console.log('Izraz je netočan');
}

// ternarni operator uvjeta
//daNe ? console.log('Izraz je točan') : console.log('Izraz je netočan');

//switch case

// switch (broj) {
//   case 1:
//     console.log('broj je 1');
//     break;
//   case 2:
//     console.log('broj je 2');
//     break;
//   default:
//     console.log('nepoznat broj');
// }

// 3) napisati 2 funckcije koje vraćaju rezultat
// jedna od njih treba biti zapisana u varijabli
// pozvati svaku od te 2 funkcije 3 puta s različim input parametrima
// svaka od funkcija mora imati 2 ulaza i neki return/povratnu vrijednost

function zbroji(a, b) {
  return a + b;
}

//funkcija kao varijabla, arrow funkcija

const izracunaj = (broj1, broj2) => {
  const res = broj1 - broj2;
  if (res < 0) {
    return 'Broj ' + res + ' je manji od 0';
  }
  if (res > 0) {
    return 'Broj ' + res + ' je veći od 0';
  }
  if (res === 0) {
    return 'Broj ' + res + ' je jednak 0';
  }
};

let x = izracunaj(zbroji(1, 2), 4);
let y = izracunaj(5, 3);
let z = izracunaj(1, 1);

console.log(x, y, z);

// 4) Kreirati array todo itema. Unutar arraya staviti 2 itema.
// oblik todo objekta će biti npr.

// let todoItem = {
//   id: 1,
//   zadatak: 'Usisati pod',
//   odradjeno: true,
// };

// napraviti funkciju na čiji poziv će se dodati novi item unutar ovoga arraya

const items = [
  {
    id: 1,
    zadatak: 'Usisati pod',
    odradjeno: true,
  },
  {
    id: 2,
    zadatak: 'Oprati suđe',
    odradjeno: false,
  },
];

console.log(items);

function dodajSimpleItem(item) {
  items.push(item);
}

dodajSimpleItem({
  id: 3,
  zadatak: 'Okačiti robu na štrik',
  odradjeno: false,
});

console.log(items);

function addItem(zadatak) {
  items.push({
    id: items.length + 1,
    zadatak: zadatak,
    odradjeno: false,
  });
}

addItem('Testirati aplikaciju');
console.log(items);

//5. Dodati mogućnost prikaza svih elemenata iz items liste unutar HTMLa pri otvaranju aplikacije

//6. Kreirati 2 metode za dodavanje checkboxa i gumba "ukloni" kroz kod
//  navedene metode će se zvati iz metode showItemOnScreen()
// u style.css na klasi todoList dodati stilizaciju koja sakriva bullet i stilizirati sve gumbe "ukloni"

//7. + a) Dodati CSS klasu pod nazivom done na li element koji je child element todo liste.
//    - U toj CSS klasi dodati text-decoration koji će precrtati element (crta preko čitavog teksta)
//   + b) dodati id addButton (u html) na element button koji dodaje novi element (button s tekstom "Učitaj")
//  + c) definirati input i addbutton konstante/varijable na vrhu JS dokumenta (ispod list konstante) (getElementById, querySelector itd.)
//  + d) dodati event listener na gumb s id-em addButton koji na klik poziva metodu showItemOnScreen() https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//   e) dodati funkciju pod nazivom markDone koji postavlja CSS klasu "done" na element teksta (classList.toggle)
//   f) dodati event listener na gumb s id-em addButton koji na klik poziva metodu markDone()

//8. a) napisati funkciju koja uklanja element iz retka
// b) na gumbu "Ukloni" unutar svakog retka dodati
// event listener koji poziva metodu za uklanjanje eventa

//HINT: pogledati kako radi markDone i addCheckBox

//9. TESTOVI:
//a) Incijalizirati npm (npm init komanda u terminalu)
//b) instalirati jest i staviti skriptu u package.json (npm install --save-dev jest komanda u terminalu) - https://jestjs.io/docs/getting-started
//c) kreirati folder __tests__ i u njega staviti script.test.js file
//d) napisati jedan test za vašu todo aplikaciju. može se testirati bilo što
//d- alt) također, možete napisati novu funkciju u script.js ili u drugom file i nju exportati i testirati
//BITNO: prije slanja izbrišite node_modules folder

//10. Minificirati script.js na https://www.toptal.com/developers/javascript-minifier
//Spremiti file kao script.min.js

//11. Dodati ESLint u projekt i popraviti sve eventualne greške koje ste imali u vašim fileovima
// koraci za instalaciju su u eslint.txt
// ako ste instalirali ESLint ranije, počnite od koraka 4.

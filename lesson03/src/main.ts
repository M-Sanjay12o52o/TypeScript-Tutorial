let stringArr = ["one", "two", "three"];

let bats = ["gray nicolas", "kokkaburra", 1205];

let mixedData = ["ODI", 2020, true];

stringArr[0] = "twelve";

bats[0] = 123;
bats.unshift("mrf");

mixedData[0] = false;

// stringArr = bats;
bats = stringArr;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

// mixed = myTuple;

// myTuple = mixed;

myTuple[0] = "Sanjay";

mixed[3] = true;

// console.log(mixed);

// Objects
let myObject: object;

myObject = [];

// console.log(typeof myObject);

const exampleObj = {
  prop1: "Sanjay",
  prop2: true,
};

exampleObj.prop2 = false;

interface Player {
  name?: string;
  active: boolean;
  records: (string | number)[];
}

let bowler: Player = {
  name: "Rabada",
  active: true,
  records: ["breaths fir", 1284],
};

let batsmen: Player = {
  name: "Nortje",
  active: true,
  records: ["bowling above 150 with ease", 3453],
};

// bowler = batsmen;
batsmen = bowler;

const greetBowler = (bowler: Player) => {
  return `Hello ${bowler.name?.toUpperCase()}!`;
};

// console.log(greetBowler(bowler));

// ENUMs

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

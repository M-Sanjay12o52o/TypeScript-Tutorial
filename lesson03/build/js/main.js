"use strict";
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
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
// mixed = myTuple;
// myTuple = mixed;
myTuple[0] = "Sanjay";
mixed[3] = true;
// console.log(mixed);
// Objects
let myObject;
myObject = [];
// console.log(typeof myObject);
const exampleObj = {
    prop1: "Sanjay",
    prop2: true,
};
exampleObj.prop2 = false;
let bowler = {
    name: "Rabada",
    active: true,
    records: ["breaths fir", 1284],
};
let batsmen = {
    name: "Nortje",
    active: true,
    records: ["bowling above 150 with ease", 3453],
};
// bowler = batsmen;
batsmen = bowler;
const greetBowler = (bowler) => {
    var _a;
    return `Hello ${(_a = bowler.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
// console.log(greetBowler(bowler));
// ENUMs
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);

"use strict";
// type assertions
// converting to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
// type asserting using - as
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem here. but a string is returned.
let nextVal = addOrConcat(2, 2, "concat");
// double casting or force casting
//10 as string;
10;
// The DOM
// non-null assertion
const img = document.querySelector("img");
// type assertion
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;

"use strict";
// the difference between interfaces and types in ts is that the above
// functionality of type cannot be done using interfaces
// Literal types
let myName;
let userName;
userName = "Sanjay M";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c, d) => {
    // type guard
    if (typeof d !== "undefined") {
        return a + b + c + d;
    }
    return a + b + c;
};
// default values
const sumAll = (a = 10, b, c, d = 2) => {
    return a + b + c + d;
};
logMsg(addAll(1, 2, 3, 4));
logMsg(sumAll(1, 2, 3));
logMsg(sumAll(1, 2, 3, 4));
logMsg(sumAll(undefined, 2, 3));
// Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// returns never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    // return "something else";
    return createError("This should never happen");
};

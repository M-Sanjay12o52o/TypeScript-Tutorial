// Type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Player {
  name: string;
  active: boolean;
  records: stringOrNumberArray;
}

type UserId = stringOrNumber;

// the difference between interfaces and types in ts is that the above
// functionality of type cannot be done using interfaces

// Literal types
let myName: "Sanjay";

let userName: "Sanjay" | "Sanju" | "Sanjay M";
userName = "Sanjay M";

// functions
const add = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c: number, d?: number): number => {
  // type guard
  if (typeof d !== "undefined") {
    return a + b + c + d;
  }

  return a + b + c;
};

// default values
const sumAll = (
  a: number = 10,
  b: number,
  c: number,
  d: number = 2
): number => {
  return a + b + c + d;
};

logMsg(addAll(1, 2, 3, 4));
logMsg(sumAll(1, 2, 3));
logMsg(sumAll(1, 2, 3, 4));
logMsg(sumAll(undefined, 2, 3));

// Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

// returns never type
const createError = (errMsg: string) => {
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
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";

  // return "something else";
  return createError("This should never happen");
};

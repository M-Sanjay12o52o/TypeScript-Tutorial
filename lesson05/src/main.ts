// type assertions

type One = string;
type Two = string | number;
type Three = "hello";

// converting to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }

  return "" + a + b;
};

// type asserting using - as
let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem here. but a string is returned.
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// double casting or force casting
//10 as string;
10 as unknown as string;

// The DOM
// non-null assertion
const img = document.querySelector("img")!;
// type assertion
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;

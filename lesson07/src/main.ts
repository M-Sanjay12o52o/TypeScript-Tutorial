// index signatures & keyof assertions

// interface TransactionObj {
// //   readonly [index: string]: number;
// }

// this will help other properties to be added with this interface but the above one doesn't
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job: number;
//   }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  //   Dave: 'hey' // this isn't good because 'hey' is a string
  Dave: 42, // this is ok
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";

// ts doesn't like this, this is trying to access dynamically
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todaysNet(todaysTransactions));

// cannot do this, because the interface is defined as read-only
// todaysTransactions.Pizza = 40

console.log(todaysTransactions["Dave"]);

/////////////////////////////////////////////

interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test); // doesn't exist is the key wasn't added to the interface with the configuration that we have used

for (const key in student) {
  // this is useful when we have key asserted in the interface
  //   console.log(`${key}: ${student[key]}`);
  // this works when there is no key assertion in the interface
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// what keyof does is it creates a union type and the union type is the specific string literal, here it's Student interface

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

//////////////////////////////////////////

// interface Incomes {
//   [key: string | number]: number;
//   //   [key: "salary" | "bonus" | "sidehustle"]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

// Using the Record utility type this replaces the above Incomes interface and the above interface cannot define literal type like we've done here.
type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

// this doesn't work
// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue]);
// }

// using keyof assertion works
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

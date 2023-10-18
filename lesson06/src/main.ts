// classes

// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;

//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }

// to resolve the above code repeatability we can add visibility modifiers

class Coder {
  // asserting because we are not initializing it at the beginning
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);

console.log(Dave.getAge());
// console.log(Dave.age); // not accessible
// console.log(Dave.lang); // not accessible

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I Write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);

console.log(Sara.getLang());
// console.log(Sara.age); // still private
// console.log(Sara.lang);
///////////////////////////////////////////////////////////////////////////

// implementing an interface to a class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

// class that implements the above interface
class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));

//////////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
const Sammy = new Peeps("Sara");
const Jimmy = new Peeps("Jimmy");

console.log(Jimmy.id);
console.log(Steve.id);
console.log(Peeps.count);

//////////////////////////////////////////////////////////
// getters and setters

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // get is a special keyword that we can use to get our data in js & ts
  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
MyBands.data = [...MyBands.data, "ZZ Top"];

MyBands.data = ["Van Halen"];

console.log(MyBands.data);

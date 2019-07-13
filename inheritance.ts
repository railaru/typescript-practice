class Human {
  constructor(public name) {}

  sayHi() {
    return `Hello, ${this.name}`;
  }
}

const patric = new Human('Patrick Mullot');

console.log(patric.sayHi());

class SuperHuman extends Human {
  heroName;

  constructor(name) {
    super(name);
    this.heroName = `HERO ${name}`;
  }

  superpower() {
    return `${this.heroName} can also fly`;
  }
}

const steph = new SuperHuman('Steph Curry');

console.log(steph.sayHi());
console.log(steph.superpower());

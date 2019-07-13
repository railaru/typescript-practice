function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}

class CanSayHi {
  name;

  sayHi() {
    return `Hello, ${this.name}`;
  }
}

class HasSuperPower {
  heroName;

  superpower() {
    return `${this.heroName} 🔥🔥🔥`;
  }
}

class SuperHero2 implements CanSayHi, HasSuperPower {
  heroName;

  constructor(public name) {}

  sayHi: () => string;
  superpower: () => string;
}

applyMixins(SuperHuman, [canSayHi, HasSuperPower]);

const ts = new SuperHero2('TypeScipt');

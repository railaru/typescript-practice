function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
class CanSayHi {
    sayHi() {
        return `Hello, ${this.name}`;
    }
}
class HasSuperPower {
    superpower() {
        return `${this.heroName} 🔥🔥🔥`;
    }
}
class SuperHero2 {
    constructor(name) {
        this.name = name;
    }
}
applyMixins(SuperHuman, [canSayHi, HasSuperPower]);
const ts = new SuperHero2('TypeScipt');

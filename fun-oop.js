//mixin pattern
const hasName = name => {
    return { name };
};
const canSayHi = name => {
    return {
        sayHi: () => `Hello, ${name}`
    };
};
const Person3 = function (name) {
    return {
        ...hasName(name),
        ...canSayHi(name)
    };
};
const person3 = Person3('Jeff');
console.log(person3.sayHi());

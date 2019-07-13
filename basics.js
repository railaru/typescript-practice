// annotations
const person = {
    first: 'Jeff',
    last: 'Delaney'
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
};
// functions
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(5, 6);
function printName(name) {
    console.log('hello ' + name);
}
printName('Rutenis');
//arrays
//array of type number
const arrayOfNumbers = [];
arrayOfNumbers.push(1);
arrayOfNumbers.push(2);
arrayOfNumbers.push(3);
//uses custom Person interface declared at the top
const arrayOfPeople = [];
arrayOfPeople.push({ first: 'John', last: 'Doe', fast: true });
arrayOfPeople.push({ first: 'Bob', last: 'Johnson', fast: false });
const myListArray = [];
myListArray.push(1);
myListArray.push('flower');
myListArray.push(true);
//generics
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);

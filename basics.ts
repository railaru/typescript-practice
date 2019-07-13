// annotations

interface Person {
  first: string;
  last: string;
  fast: boolean;
}

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

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

pow(5, 6);

function printName(name: string): void {
  console.log('hello ' + name);
}

printName('Rutenis');

//arrays

//array of type number

const arrayOfNumbers: number[] = [];

arrayOfNumbers.push(1);
arrayOfNumbers.push(2);
arrayOfNumbers.push(3);

//uses custom Person interface declared at the top

const arrayOfPeople: Person[] = [];

arrayOfPeople.push({ first: 'John', last: 'Doe', fast: true });
arrayOfPeople.push({ first: 'Bob', last: 'Johnson', fast: false });

//tulip data structure

type myList = [number?, string?, boolean?]; // ? to set predifining optional

const myListArray: myList = [];

myListArray.push(1);
myListArray.push('flower');
myListArray.push(true);

//generics

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);

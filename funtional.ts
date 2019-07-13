//pure functions

let num = 123;

function toStringy(val) {
  num = val;
  return val.toString();
}

const str = toStringy(num);

//immutable data

const data = Object.freeze([1, 2, 3, 4, 5, 6]);

//functions as arguments
const addEmoji = val => toStringy(val) + ' 😃';

const emojiData = data.map(addEmoji);

//functions as return value

const appendEmoji = fixed => dynamic => fixed + dynamic;

const rainy = appendEmoji('🌧️');
const sunny = appendEmoji('🌞');

// function assertEqual(actual, expected){
//   if (actual === expected){
//     console.log(`🥭🥭🥭Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🍓🍓🍓Assertion Failed: ${actual} !== ${expected}`);
//   }
// }
const assertEqual = require('./assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const array = [2];
const arrayWords = [];

function tail(){
 
 words.shift();
 array.shift();
 arrayWords.shift();
  
}

// tail(words);
// assertEqual(words.length, 3);
// assertEqual(words[0], "Lighthouse");
// assertEqual(words[1], "Labs");

// tail(array);
// assertEqual(array.length, 1);

// tail(arrayWords);
// assertEqual(arrayWords.length, 1);

module.exports = tail;

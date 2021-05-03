const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
const array = [2];
const arrayWords = [];

tail(words);
assertEqual(words.length, 3);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

tail(array);
assertEqual(array.length, 1);

tail(arrayWords);
assertEqual(arrayWords.length, 1);

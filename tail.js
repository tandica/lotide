const assertEqual = require('./assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const array = [2];
const arrayWords = [];

function tail(){
 
 words.shift();
 array.shift();
 arrayWords.shift();
  
}

module.exports = tail;

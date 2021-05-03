const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1, 2, 3, 4])); 
console.log(middle([1, 2, 3])); 
console.log(middle([1])); 

console.log(assertArraysEqual(middle([5, 7, 6])));
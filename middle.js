// function eqArrays(arr1, arr2){
//   if (arr1.length === arr2.length){
//     return true
//   } else {
//     return false
//   }
// }

// function assertArraysEqual(arr1, arr2){
//   //implement eqArrays function
//   let outcome = eqArrays(arr1, arr2);
//   //if arrays are equal, print 'Equal'
//   if (outcome === true){
//     console.log('Equal');
//   } else {
//     //else print 'not equal'
//     console.log('Not equal');
//   }
// }

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//the middle function should take in an array and return the middle elements of the array
//arrays with one or two elements should return an empty array
//arrays with an odd number of elements should return an array of a single element
//arrays with an even number of elements should return the two elements in the middle

function middle(array){
  let newArray = [];
    if (array.length <= 2 && array.length > 0){
      console.log('empty');
    } else if (array.length % 2 !== 0){
        newArray = [array[Math.floor(array.length / 2)]];
        console.log('odd');
    } else if (array.length % 2 === 0){
        newArray = [array[(array.length / 2) - 1], array[array.length/2]];
        console.log('even');
    }
  return newArray;
}

// console.log(middle([1, 2, 3, 4])); 
// console.log(middle([1, 2, 3])); 
// console.log(middle([1])); 

// console.log(assertArraysEqual(middle([5, 7, 6])));
//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
module.exports = middle;
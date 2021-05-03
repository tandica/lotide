const eqArrays = require('./eqArrays');

function assertArraysEqual(actual){
  //if arrays are equal, print 'Equal'
  if (actual === true){
    console.log('Equal');
  } else {
    //else print 'not equal'
    console.log('Not equal');
  }
}

// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
// assertArraysEqual(eqArrays([5, 2, 3], [8, 2, 7]));

module.exports = assertArraysEqual;
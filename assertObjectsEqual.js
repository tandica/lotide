function eqObjects(object1, object2){
  //if the length of object1 is equal to the length of object2
  if (Object.keys(object1).length === Object.keys(object2).length){
    //loop through object keys
    for(let key of Object.keys(object1) ){
      //compare both objects values for the key
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        //implement eqArrays function to support array value comparisons
        if (!eqArrays(object1[key],object2[key])){
          return false;       
        }
      }
          
    }
      return true;
  }
  return false;    
}


//function should take in two objects and console log an appropriate message


function assertObjectsEqual(actual, expected){
  const inspect = require('util').inspect; 
  //check if objects are 
  if (actual === expected){
    console.log(`🥭🥭🥭Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍓🍓🍓Assertion Failed: ${actual} !== ${expected}`);
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true
console.log(assertObjectsEqual(eqObjects(ab,ba), true));

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
console.log(assertObjectsEqual(eqObjects(ab,abc), false));

module.exports = assertEqual; 
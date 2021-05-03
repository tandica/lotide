function assertEqual(actual, expected){
  if (actual === expected){
    console.log(`🥭🥭🥭Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍓🍓🍓Assertion Failed: ${actual} !== ${expected}`);
  }
}


function eqArrays(arr1, arr2){
  if (arr1.length === arr2.length){
    return true
  } else {
    return false
  }
}


//function should take in two objects then return true or false based on a perfect match 


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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// console.log(assertEqual(eqObjects(ab,ba), true));

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// console.log(assertEqual(eqObjects(ab,abc), false));

module.exports = eqObjects; 

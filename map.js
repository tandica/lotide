
function eqArrays(arr1, arr2){
  if (arr1.length === arr2.length){
    return true
  } 
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] === arr2[i]){
      return true;
    }
  }
return false
}


function assertArraysEqual(arr1, arr2){
  //implement eqArrays function
  let outcome = eqArrays(arr1, arr2);
  //if arrays are equal, print 'Equal'
  if (outcome === true){
    console.log('Equal');
  } else {
    //else print 'not equal'
    console.log('Not equal');
  }
}


const words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results1, ["control", "to", "major", "tom"]);
assertArraysEqual(results1, ["control", "to", "major", "tom", "tom", "ground"]);

module.exports = map; 
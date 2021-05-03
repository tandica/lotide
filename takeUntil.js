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
  let outcome = eqArrays(arr1, arr2);
  if (outcome === true){
    console.log('Equal');
  } else {
    console.log('Not equal');
  }
}

function takeUntil(array, callback){
  let results = [];
  for (let x of array){
    if (!callback(x)){
      results.push(x);
    } else {
      return results;
    }
  }
}


const data1 = [1, 2, 5, -7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil; 

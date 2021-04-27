function eqArrays(arr1, arr2){
  if (arr1.length === arr2.length){
    return true
  } else {
    return false
  }
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([5, 2, 3], [8, 2, 7]);
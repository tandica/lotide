function eqArrays(arr1, arr2){
  if (arr1.length === arr2.length){
    return true
  } else {
    return false
  }
}

function assertArraysEqual(arr1, arr2){
  let outcome = eqArrays(arr1, arr2);
  if (outcome === true){
    console.log('Equal');
  } else {
    console.log('Not equal');
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);

function without(source, itemsToRemove){
  //make new avariable before altering the array 
  let newArray = source;
  for(let i = 0; i <= newArray.length;i++){
    //get into the values of the array
    for (let items of itemsToRemove){
      //if the item is identified to be removed, make the remaining values into the new array
      if(source[i] === items){
        let removedItem = newArray.indexOf(items);
        //remove desired items
        newArray.splice(removedItem,1);
      }
    }
  }
  return newArray;
}

let source = [7, 26, 38, 9, 20];
//specify which item to remove
let itemsToRemove = [9, 7];
console.log(without(source,itemsToRemove));
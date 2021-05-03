const assertEqual = require('./assertEqual');

//function that takes two arrays and returns true or false based on a perfect match
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


module.exports = eqArrays;


  //another solution
// function eqArrays(arr1, arr2){
//   if (arr1.length === arr2.length){
//     return true
//   } else {
//     return false
//   }
// }

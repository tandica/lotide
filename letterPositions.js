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

function eqArrays(arr1, arr2){
  if (arr1.length === arr2.length){
    return true
  } else {
    return false
  }
}


function letterPositions (sentence) {
  let results = {}; 
  //divide the sentence
  let letters = sentence.split('');
  //loop through the sentence divisions
  for (let i = 0; i < letters.length; i ++) {
    //find the positions of each letter ans push them onto an array
      let figure = letters[i];
      if (!results[figure]) {
          results[figure] = [i];
          
      } else {
          results[figure].push(i);
      }
  }
  return results;   
}

let sentence = 'lighthouse in the house';

 const result1 = letterPositions(sentence, { "l": [], "i": [], "g": [], "h": [], "t": [], "o": [], "u": [], "s": [], "e": [], "n": [] });
 console.log(result1)

 assertArraysEqual(letterPositions("hello").e, [1]);

 module.exports = letterPositions; 
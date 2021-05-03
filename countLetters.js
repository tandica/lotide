function assertEqual(actual, expected){
  if (actual === expected){
    console.log(`🥭🥭🥭Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍓🍓🍓Assertion Failed: ${actual} !== ${expected}`);
  }
}

//take a sentence as a wholePhrase and determine how many times each letter is stated

function countLetters(wholePhrase, phraseLetters){
  //loop through sentence
  for (let i = 0; i < wholePhrase.length; i++){
    //access items in string 
    let currentLetter = wholePhrase.charAt(i);
    
     if (phraseLetters[currentLetter] >= 0) {
       phraseLetters[currentLetter] += 1;
       //console.log(currentLetter);
       }
   }
   return phraseLetters;
 }



let sentence = 'lighthouse in the house';

 const result1 = countLetters(sentence, { "l": 0, "i": 0, "g": 0, "h": 0, "t": 0, "o": 0, "u": 0, "s": 0, "e": 0, "n": 0 });
 console.log(result1)

 module.exports = countLetters; 
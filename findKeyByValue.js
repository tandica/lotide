function assertEqual(actual, expected){
  if (actual === expected){
    console.log(`🥭🥭🥭Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍓🍓🍓Assertion Failed: ${actual} !== ${expected}`);
  }
}

//function should scan the object and return the first key that contains the given value
//if no key is found then it shoul return undefined

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


function findKeyByValue(obj, value){
  for (let key in obj){
    if (value === obj[key]){
      //console.log(key)
      return key;
    }
  }
return undefined;

}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue; 
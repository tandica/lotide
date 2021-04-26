function assertEqual(actual, expected){
  if (actual === expected){
    console.log(`🥭🥭🥭Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍓🍓🍓Assertion Failed: ${actual} !== ${expected}`);
  }
}

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Coconuts and mangoes", "Coconuts and mangoes");
// assertEqual("Coconuts and mangoes", "Bananas and strawberries");
// assertEqual(7, 26);
// assertEqual("Today is April 26", "Yesterday was April 25");
// assertEqual(3.1415926535897932384626433832795, 3.1415926535897932384626433832795);

function head(array){

  for (let i = 0; i < array.length; i++){
  }
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Goodbye", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7,6,7]), 5);
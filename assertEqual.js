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

module.exports = assertEqual;
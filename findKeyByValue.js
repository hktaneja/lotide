// TEST FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // Check if the actual and expected values are equal
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Find the key associated with a given value in an object.
const findKeyByValue = function(ShowObject, value) {
  for (const item of Object.keys(ShowObject)) {
    if (ShowObject[item] === value) {
      return ShowObject[item];
    }
  }
};

// CALING TEST FUNCTIONS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
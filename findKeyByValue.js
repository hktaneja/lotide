const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Find the key associated with a given value in an object.
const findKeyByValue = function(ShowObject, value) {
  for (const item of Object.keys(ShowObject)) {
    if (ShowObject[item] === value) {
      return item;
    }
  }
};

// CALING TEST FUNCTIONS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

//  FUNCTION IMPLEMENTATION
//Create a new array with elements from the original array until the specified condition is met.
const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    result.push(element);
  }
  return result;
};

// Example usage
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


//CALLING TEST CODE
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "to", "Hollywood"]);

module.exports = takeUntil;


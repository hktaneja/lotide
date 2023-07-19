const assertArraysEqual = require('./assertArraysEqual');

// Remove specified items from an array and return a new array without those items.
const without = function(sourceArray, itemsToRemoveArray) {
  let modifiedArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if (sourceArray[i] === itemsToRemoveArray[j]) {
        found = true;
        break;
      }
    }
    if (!found)
      modifiedArray.push(sourceArray[i]);
  }
  return modifiedArray;
};
const words  = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3];
const values = ["1", "2", "3"];

//CALLING TEST FUNCTIONS
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(numbers, [1]), [2, 3]);
assertArraysEqual(without(values, [1, 2, "3"]), ["3"]);

module.exports = without;
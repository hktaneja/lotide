// TEST FUNCTION IMPLEMENTATION
// Compare two arrays for equality
const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.join() === secondArray.join())
    console.log(`Assertion passed ${firstArray} === ${secondArray}`);
  else
    console.log(`Assertion Failed ${firstArray} !== ${secondArray}`);
};
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
};
const words  = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3];
const values = ["1", "2", "3"];

without(words, ["lighthouse"]);  // => ["hello", "world"]
without(numbers, [1]); // => [2, 3]
without(values, [1, 2, "3"]); // => ["1", "2"]

//CALLING TEST FUNCTIONS
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(numbers, [1, 2, 3]);
assertArraysEqual(values, ["1", "2", "3"]);


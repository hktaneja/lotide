const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const flatten  = function(array) {
  let flattenArray = [];
  if (array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        // If the element is an array, agian call the function and push them to the flattenArray
        flattenArray = flattenArray.concat(flatten(array[i])); // Use concat to merge arrays
      } else
        flattenArray.push(array[i]);
    }
    return flattenArray;
  }
};

// CALLING TEST FUNCTION
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5], 5, [6, 6]]), [1, 2, 3, 4, 5, 5, 6, 6]);
assertArraysEqual(flatten([1, 2, [3, [4, 5]], 6]) , [1, 2, 3, 4, 5, 6]);
module.exports = flatten;

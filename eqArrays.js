// TEST FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // Check if the actual and expected values are equal
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};
//Compare two arrays for equality
const eqArrays = function(array1, array2) {
  // Check if the lengths of the arrays are different
  if (array1.length !== array2.length)
    return false;
  // Iterate over the elements of the arrays
  for (let i = 0; i < array1.length; i++) {
    // Check if the corresponding elements are different
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
};

module.exports = eqArrays;
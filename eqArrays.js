// TEST FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};
// FUNCTION IMPLEMENTATION

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) 
    return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) 
      return false;    
  }
  return true;   
}

module.exports = eqArrays;
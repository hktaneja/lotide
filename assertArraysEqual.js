// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true)
    console.log(`Assertion passed ${firstArray} === ${secondArray}`);
  else
    console.log(`Assertion Failed ${firstArray} !== ${secondArray}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) 
    return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) 
      return false;    
  }
  return true;   
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["4", "2", "3"], ["4", "2", 3]);
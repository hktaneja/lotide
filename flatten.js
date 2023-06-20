// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(firstArray, secondArray) {
  if ((flatten (firstArray)).join() === secondArray.join())
    console.log(`Assertion passed ${firstArray} === ${secondArray}`);
  else
    console.log(`Assertion Failed ${firstArray} !== ${secondArray}`);
};

const flatten  = function(array) {
  let flattenArray = [];
  if (array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let j = 0; j < array[i].length; j++) {
          flattenArray.push(array[i][j]);
        }
      }
      else
        flattenArray.push(array[i]);
    }
    return flattenArray;
  } 
}
  
assertArraysEqual([1, 2, [3, 4], 5, [6]], [1, 2, 3, 4, 5, 6]);
assertArraysEqual([1, 2, [3, 4, 5], 5, [6, 6]], [1, 2, 3, 4, 5, 5, 6, 6]);

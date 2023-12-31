// Importing the assertArraysEqual function from another file

const assertArraysEqual = require('./assertArraysEqual');

// MIDDLE FUNCTION IMPLEMENTATION
// Get the middle element(s) of an array
const middle = function(array) {
  let middleArray = [];
  let index = 0;
  let lengthOfArray = array.length;
  if (lengthOfArray <= 2) 
    return middleArray;
  index = Math. trunc(lengthOfArray / 2);
  if (lengthOfArray % 2 === 0) {
    middleArray.push(array[index - 1]);
    middleArray.push(array[index]);
  } else
    middleArray.push(array[index]);
  return middleArray;
};
module.exports = middle;
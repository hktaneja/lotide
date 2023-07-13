const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleArray = [];
  let index = 0;
  let lengthOfArray = array.length;
  if (lengthOfArray === 1 || lengthOfArray === 2) 
    return middleArray;
  index = Math. trunc(lengthOfArray / 2);
  if (lengthOfArray % 2 === 0) {
        middleArray.push(array[index-1]);
        middleArray.push(array[index]);
  }
  else
    middleArray.push(array[index]);
  return middleArray;    
}
module.exports = middle;
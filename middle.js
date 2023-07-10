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

// assertArraysEqual([1], []);
// assertArraysEqual([1, 2], []);

// assertArraysEqual([1, 2, 3], [2]);
// assertArraysEqual([1, 2, 3, 4, 5], [3]);

// assertArraysEqual([1, 2, 3, 4], [2, 3]);
// assertArraysEqual([1, 2, 3, 4, 5, 6], [3, 4]);

module.exports = middle;
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


//Function to return all the indices (zero-based positions) in the string where each character is found.
const letterPositions  = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [];
        result[sentence[i]].push(i);
      }
    }
  }
  return result;
};
//Testing the logic

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1,11]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [1,18]);

module.exports = letterPositions;
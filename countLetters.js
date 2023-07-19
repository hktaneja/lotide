const assertEqual = require('./assertEqual');

//Count the occurrences of each letter in a given sentence.
const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (result[letter])
        result[letter] += 1;
      else
        result[letter] = 1;
    }
  }
  return result;
};
// Test cases
const result1 = countLetters("lighthouse in the house");

//CALLING TEST FUNCTIONS
assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["s"], 2);
assertEqual(result1["g"], 2);

module.exports = countLetters;
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  const result = {};
  for(const letter of sentence ){
    if (letter !==' ') {
      if (result[letter])
        result[letter] += 1;
      else
        result[letter] = 1;
      }
    }
  return result;
}
const result1 = countLetters("lighthouse in the house");
console.log(result1)

assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["s"], 2);
assertEqual(result1["g"], 2);

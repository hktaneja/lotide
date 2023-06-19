const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};


const tailArray = [];
let  j = 0;
const tail = function(mainArray) {
  for (let i = 1; i < mainArray.length; i++) {
    tailArray[j] = mainArray[i];
    j++;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
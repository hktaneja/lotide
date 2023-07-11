// const assertEqual = function(actual, expected) {
//   if (actual === expected)
//     console.log(`Assertion passed ${actual} === ${expected}`);
//   else
//     console.log(`Assertion Failed ${actual} !== ${expected}`);
// };





const tail = function(mainArray) {
  const tailArray = [];
  let  j = 0;
  for (let i = 1; i < mainArray.length; i++) {
    tailArray[j] = mainArray[i];
    j++;
  }
  return tailArray; 
};

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//const words = [5];
//console.log(tail(words));
// assertEqual(words.length, 3);

module.exports = tail;
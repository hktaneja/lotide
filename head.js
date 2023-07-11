
const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected)
//     console.log(`Assertion passed ${actual} === ${expected}`);
//   else
//     console.log(`Assertion Failed ${actual} !== ${expected}`);
// };

// FUNCTION IMPLEMENTATION
const head = function(array) {
    return array[0] ; 
};

// TEST CODE


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5,6,7]), 7);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");

module.exports = head;




  




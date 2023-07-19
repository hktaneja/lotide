const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// Original arrays
const words = ["ground", "control", "to", "major", "tom"];
const cars = ["honda", "toyota", "hyundai", "chverolet"];

// MAP FUNCTION IMPLEMENTATION
// Apply a callback function to each element of an array and return a new array with the results.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//CALLING THE TEST FUNCTIONS
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm' ,'t']);
assertArraysEqual(map(words, word => word[0]), ['g', 's', 't', 'l' ,'t']);
assertArraysEqual(map(cars, word => word[0]), ['h', 't', 'h', 'c']);
assertArraysEqual(map(cars, word => word[0]), ['h', 'h', 'h', 'c']);

module.exports = map;

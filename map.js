const words = ["ground", "control", "to", "major", "tom"];
const cars = ["honda", "toyota", "hyundai", "chverolet"];

// MAP FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

//TEST CODE

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true)
    console.log(`Assertion passed ${firstArray} === ${secondArray}`);
  else
    console.log(`Assertion Failed ${firstArray} !== ${secondArray}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) 
    return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) 
      return false;    
  }
  return true;   
}

//CALLING THE TEST FUNCTIONS
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm' ,'t']);
assertArraysEqual(map(words, word => word[0]), ['g', 's', 't', 'l' ,'t']);
assertArraysEqual(map(cars, word => word[0]), ['h', 't', 'h', 'c']);
assertArraysEqual(map(cars, word => word[0]), ['h', 'h', 'h', 'c']);

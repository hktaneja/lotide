

// FUNCTION IMPLEMENTATION
const head = function(actual, expected) {

  if (actual[0] === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
  console.log(`Assertion Failed ${actual} !== ${expected}`);
};

// TEST CODE


head([5,6,7], 5);
head(["Hello", "Lighthouse", "Labs"], "Hello");
head([5,6,7], 7);
head(["Hello", "Lighthouse", "Labs"], "Hi");


  




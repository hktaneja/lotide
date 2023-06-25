// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

/*const findKeyByValue = function(ShowObject, value) {
  for (const item in ShowObject) {
    if (ShowObject[item] === value) 
    {
      return ShowObject[item];
    }        
  }
}*/
const findKeyByValue = function(ShowObject, value) {
  for (const item of Object.keys(ShowObject)) {
    if (ShowObject[item] === value) 
    {
      return ShowObject[item];
    }        
  }
}

  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
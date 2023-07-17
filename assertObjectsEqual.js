const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true)
    console.log(`Assertion passed  ${inspect(actual)} ===  ${inspect(expected)}`);
  else
    console.log(`Assertion Failed  ${inspect(actual)} !==  ${inspect(expected)}`);
};

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1).sort();
  const obj2Keys = Object.keys(object2).sort();
  if (Array.isArray(obj1Keys) && Array.isArray(obj2Keys)) {
    return eqArrays(obj1Keys,obj2Keys);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);
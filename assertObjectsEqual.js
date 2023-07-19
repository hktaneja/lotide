const assereqObjectstEqual = require('./eqObjects');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true)
    console.log(`Assertion passed  ${inspect(actual)} ===  ${inspect(expected)}`);
  else
    console.log(`Assertion Failed  ${inspect(actual)} !==  ${inspect(expected)}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

module.exports = assertObjectsEqual;
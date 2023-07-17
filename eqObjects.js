// TEST FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  // Compare the number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false; // Different number of keys
  }

  for (const key of obj1Keys) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      // Compare nested arrays
      if (!eqArrays(val1, val2)) {
        return false; // Arrays are not identical
      }
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      // Compare nested objects
      if (!eqObjects(val1, val2)) {
        return false; // Objects are not identical
      }
    } else if (val1 !== val2) {
      // Compare other values
      return false;
    }
  }

  return true; // All keys and values are identical
};
// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  // Compare the lengths of the arrays
  if (array1.length !== array2.length)
    return false;
  // Compare each element of the arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
};

// Example test cases

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

//We need to use that return value in combination with assertEquals to test if the function is working correctly.

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject),false); // => false


// Example test cases

assertEqual(eqObjects({a:1, b:2}, {b:1, a:1}),false);
assertEqual(eqObjects({a:1, b:2}, {b:2, a:2}),false);
assertEqual(eqObjects({a:1, b:[2,3]}, {a:1, b:[2,4]}),false);
assertEqual(eqObjects({a:[1,2], b:2}, {a:[2,2], b:2}),false);
assertEqual(eqObjects({a:1, b:[2,3]}, {a:2, b:[2,3]}),false);
assertEqual(eqObjects({a:[1,2], b:2}, {a:[1,2], b:3}),false);


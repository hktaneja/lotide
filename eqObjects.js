// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion passed ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1).sort();
  const obj2Keys = Object.keys(object2).sort();
  //console.log(obj1Keys);
  if(Array.isArray(obj1Keys) && Array.isArray(obj2Keys))
  {
    return eqArrays(obj1Keys,obj2Keys)
  }

 // if (obj1Keys.length !== obj2Keys.length)
    //return false;
  //for(const item of obj1Keys){  
    //if(object1[item] !== object2[item])
    // return false;   
  //}
  //return true;
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

//We need to use that return value in combination with assertEquals to test if the function is working correctly.

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject),false); // => false

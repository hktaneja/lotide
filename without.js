// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.join() === secondArray.join())
    console.log(`Assertion passed ${firstArray} === ${secondArray}`);
  else
    console.log(`Assertion Failed ${firstArray} !== ${secondArray}`);
};

const without = function(sourceArray, itemsToRemoveArray) {
  let modifiedArray = [];  
  for(let i = 0; i < sourceArray.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if(sourceArray[i] === itemsToRemoveArray[j]) {       
        found = true;
        break;
      }
    } 
    if(!found)
      modifiedArray.push(sourceArray[i]);
  }
  console.log(modifiedArray);
}
const words  = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3];
const values = ["1", "2", "3"];

without(words, ["lighthouse"]);  // => ["hello", "world"]
without(numbers, [1]) // => [2, 3]
without(values, [1, 2, "3"]) // => ["1", "2"]


assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(numbers, [1, 2, 3])
assertArraysEqual(values, ["1", "2", "3"])


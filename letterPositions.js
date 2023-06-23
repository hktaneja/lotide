//Test function
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


//Function to return all the indices (zero-based positions) in the string where each character is found.
const letterPositions  = function(sentence) {
  const result = {};    
  for (let i = 0; i < sentence.length; i++) {    
    if (sentence[i] !==' ') {
      if (result[sentence[i]]){
        result[sentence[i]].push(i);
      }
      else {
        result[sentence[i]] = [];         
        result[sentence[i]].push(i);
      }
    }   
  }
return result;
}
const result1 = letterPositions("lighthouse in the house");
console.log(result1);

//Testing the logic

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1,11]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [1,18]);
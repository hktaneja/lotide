const tail = function(mainArray) {
  const tailArray = [];
  let  j = 0;
  for (let i = 1; i < mainArray.length; i++) {
    tailArray[j] = mainArray[i];
    j++;
  }
  return tailArray; 
};

module.exports = tail;
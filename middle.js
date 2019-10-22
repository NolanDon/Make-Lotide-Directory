const middle = function(array1) {
  let newVar = [];
  let midIndex = Math.floor(array1.length/2);
  if (array1.length < 3) {
    return newVar;
  } else if (array1.length % 2 !== 0) {
      newVar.push(array1[midIndex])
        return newVar;
  } else {
    newVar.push(array1[midIndex - 1])
    newVar.push(array1[midIndex])
    return newVar;
  }
};

module.exports = middle;



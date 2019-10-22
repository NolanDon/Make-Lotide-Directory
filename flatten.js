const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`); 
    } else {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    }
  }
};

const flatten = function(array) {

    let newArr = [];
    
    array && array.forEach(a => {
      if (a instanceof Array) {
        newArr = newArr.concat(flatten(a));
      } else {
        newArr.splice(newArr.length, 0, a);
      }
    });
    
    return newArr;
  } 

  module.exports = flatten;




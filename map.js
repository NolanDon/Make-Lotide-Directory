const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
const eqArrays = function(a, b){
  for( let i = 0; i < a.length; i++) {
      if( a[i] !== b[i]) {
       return false 
       } 
    }
   return true 
 };
const map = function(array, callback) {
  const results = [];
    for (let item of array) {
    results.push(callback(item))
  }
return results;
};

// const words = ["ground", "control", "to", "major", "tom"];

module.exports = map;


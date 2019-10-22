const eqArrays = function(oneArr, twoArr) {
  if (oneArr.lenth !== twoArr.length) {
    return false;
  }
  let a = oneArr;
  let b = twoArr;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false 
    } 
  }
  return true; 
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  let match = eqObjects(actual, expected);
  if (match) {
    console.log("✅✅✅ " + `Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 " + `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const eqObjects = function(object1, object2) {
  let obj1_length = Object.keys(object1).length;
  let obj2_length = Object.keys(object2).length;
  if (obj1_length !== obj2_length) {
    return false; 
  } 
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  return true; 
};
  
module.exports = assertObjectsEqual;
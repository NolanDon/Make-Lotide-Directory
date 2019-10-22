
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(a, b){
for (let i = 0; i < a.length; i++) {
  if (a[i] !== b[i]) {
    return false;
  }
}
return true; 
};

const takeUntil = function(array, callback) {
  let data3 = [];
  for (let item of array) {
   if(callback(item)) {
      return data3;
    } else {
      data3.push(item)
    }
  }
  return data3;
}

module.exports = takeUntil;



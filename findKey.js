const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 " + `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, x) {
  for (let key in obj) {
    if(x(obj[key])) {
    return key;
  }
} 
};

module.exports = findKey;


  
  
 

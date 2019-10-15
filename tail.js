const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑 " + `Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
let tail = function(array) {
  let newArr = array.slice(1,array.length);
  return newArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
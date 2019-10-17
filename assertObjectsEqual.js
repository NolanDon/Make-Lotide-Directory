
  const assertEqual = function(actual, expected) {
      if (actual === expected) {
        console.log("✅✅✅ " + `Assertion Passed: ${actual} === ${expected}`);
      } else if (actual !== expected) {
        console.log("🛑🛑🛑 " + `Assertion Failed: ${actual} !== ${expected}`);
      }
  };
      
  const eqArrays = function(a, b){
      
    if(a.length !== b.length) {
      return false; 
    }
    for( let i = 0; i < a.length; i++) {
          if( a[i] !== b[i]) {
           return false; 
           } 
          
       }
       return true; 
  };
  
  const eqObjects = function(object1, object2) {
          
    let obj1_length = Object.keys(object1).length;
    let obj2_length = Object.keys(object2).length;
      
    if (obj1_length !== obj2_length) {
      return false 
    } 
  
    for (let key of Object.keys(object1)) {
      //console.log(key);
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //console.log("here")
        if( !eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    //console.log("here2")
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
  

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2),false); // => false

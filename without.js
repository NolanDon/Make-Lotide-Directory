const eqArrays = function(a, b){
  
  if(a.length !== b.length) {
   return false }
     for ( let i = 0; i < a.length; i++) {
        if( a[i] !== b[i]) {
         return false 
         } 
     
     }
     return true 
   }
  
const assertArraysEqual = function(actual, expected) {
    
if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    }
  };
 

const without = function (source, itemsToRemove) {
// source array and a itemsToRemove array.
let bob = itemsToRemove;
  let result = [];
  for(let key in source) {
  if(source[key] !== bob[key]) {
   result.push(source[key]);
  } else {
    
  }
  }
return result;
}
module.exports = without;


const eqArrays = function(oneArr, twoArr){
  
    let a = oneArr;
    let b = twoArr;
   
     for( let i = 0; i < a.length; i++) {
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

let empty = [];

for (let i = 0; i < source.length; i++) {
  let found = false;
    for(let j = 0; j < itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j]) {
        found = true;
      }
    } 
    if (found === false) {
        empty.push(source[i]);
    }
  }
  return empty;
}

// without function should be returning a 
// new array and not modify the original array that is passed in

// return a new array with only those elements from source
//  that are not present in the itemsToRemove array.

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

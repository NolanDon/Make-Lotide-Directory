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

const flatten = function(array) {

    let newArr = [];
    
    array && array.forEach(a => {
      if (a instanceof Array) {
        newArr = newArr.concat(flatten(a));
      } else {
        newArr.splice(newArr.length, 0, a);
      }
    });
    console.log(newArr);
    return newArr;
  }
  
    




// test code:
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

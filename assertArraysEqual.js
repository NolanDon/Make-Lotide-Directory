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
   }
   

assertArraysEqual(eqArrays([1,3,3],[1,3,4]), true);




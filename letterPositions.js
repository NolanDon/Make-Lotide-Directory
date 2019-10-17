const assertArraysEqual = function(actual, expected) {
    if (actual === true) {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    }
  };
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
   

   const letterPositions = function(sentence) {
    
    const results = {};
    
    for(let i = 0; i < sentence.length; i++) {
        //console.log(sentence[i]);
        //console.log(results[sentence[i]]);
        if(results[sentence[i]]) {
       
            results[sentence[i]].push(i);
      } else {
           results[sentence[i]] = [];
           results[sentence[i]].push(i);
    }
  }
    console.log(results);
 };
  
 letterPositions("lighthouse in the house");
// assertArraysEqual(letterPositions("hello").e, [1]);
    
// H: 0
// E: 1
// L: [2 3]
// O: 4

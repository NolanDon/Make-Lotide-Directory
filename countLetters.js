const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅✅✅ " + `Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log("🛑🛑🛑 " + `Assertion Failed: ${actual} !== ${expected}`);
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

const countLetters = function(string){

    let form = string.split(" ").join("");
    let results = {};

for (item of form) {
    
    if(results[item]) {
       
        results[item] += 1
  } else {
       results[item] = 1 
  }
  }
  // return results;
  console.log(results);
}
assertEqual(countLetters("lighthouse in the house"), true);
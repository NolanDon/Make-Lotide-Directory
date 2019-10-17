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

const findKeyByValue = function(object,value) {
    
    let keys = Object.keys(object)
   
    for(let key of keys){
        console.log(object[key])
    if(object[key] === value) {
        return key;
    }
    }
       }
              
       
       const bestTVShowsByGenre = { 
            sci_fi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama:  "The Wire"
         

       }

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
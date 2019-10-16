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
  
  // TEST CODE
  
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
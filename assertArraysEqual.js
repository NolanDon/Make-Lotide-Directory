const eqArrays = function(oneArr, twoArr){

    let a = oneArr;
    let b = twoArr;
   
     for( let i = 0; i < a.length; i++) {
        if( a[i] !== b[i]) {
            console.log("🛑🛑🛑 " + `Assertion Failed: ${oneArr} !== ${twoArr}`);
         } else if (a[i] === b[i]) {
         console.log("✅✅✅ " + `Assertion Passed: ${oneArr} === ${twoArr}`);
     }
    }
   }

eqArrays([1, 2, 3], [1, 2, 3]) // => true

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
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

//The middle function should return an array with only the middle element(s) of the provided array. 
// This means that the length of the returned elements could vary.

const middle = function(array1){

let newVar = [];
let midIndex = Math.floor(array1.length/2);

  if(array1.length < 3){
    return newVar;
  } else if (array1.length % 2 !== 0) {
   newVar.push(array1[midIndex])
  return newVar;
  } else {
    newVar.push(array1[midIndex - 1])
    newVar.push(array1[midIndex])
  
    return newVar;
}
}



// test code:
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

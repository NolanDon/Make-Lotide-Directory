const assert = require('chai').assert;
const assertArraysEqual = require('./assertArraysEqual');
  
const eqArrays = function(oneArr, twoArr){
  
  if(oneArr.lenth !== twoArr.length){
    return false;
  }
  let a = oneArr;
  let b = twoArr;
  for (let i = 0; i < a.length; i++) {
    if( a[i] !== b[i]) {
      return false 
    } 
  }
  return true 
};


module.exports = eqArrays;

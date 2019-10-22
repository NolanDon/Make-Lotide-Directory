const assert = require('chai').assert;
const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')

 // test code:
  
 describe('Eq Arrays Test', () => {
   it('checking that [1,2,3] is the same as [1,2,3]', () => {
     assert.deepEqual(assertArraysEqual(eqArrays([1,2,3],[1,2,3]), true))
   })
  })
 
 

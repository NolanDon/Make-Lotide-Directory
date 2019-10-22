const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays')

// test code:

describe('Assert Arrays Equal Test', () => {
  it('checking that [1,2,3] is equal to [1,2,3]', () => {
    assert.strictEqual(assertArraysEqual(eqArrays([1,2,3],[1,2,3], true)))
  })
});

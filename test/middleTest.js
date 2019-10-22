const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle');

// test code:

describe('Middle Test', () => {
  it('Checking that [1,2,3,4] middle index is [2,3]', () => {
    assert.deepEqual(assertArraysEqual(middle([1,2,3,4]), [2,3]))
  })
});






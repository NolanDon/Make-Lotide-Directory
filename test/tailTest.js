const assert = require('chai').assert;
const tail = require('../tail.js')
const assertEqual = require('../assertEqual')

// test code:

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("Tail Test", () => {
  it('checking that words.length is equal to 3', () => {
    assert.strictEqual(words.length, 3)
  })
});

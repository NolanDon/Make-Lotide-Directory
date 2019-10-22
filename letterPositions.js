const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`); 
    } else {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    }
  }
};
const letterPositions = function(sentence) {
  const results = {};
  const input = sentence.split(" ");
    for (const word of input) {
      for (let i = 0; i < word.length; i++) {
        if (results[word.charAt(i)])
        results[word.charAt(i)].push(i);
        else
      results[word.charAt(i)] = [i];
    }
  }
  return results;
};
  
module.exports = letterPositions;




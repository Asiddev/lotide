// const assertEqual = require("../assertEqual");

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true);
// // eqArrays([1, 2, 3], [3, 2, 1]); // => false);
// // eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false)
// // eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true)
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArraysTest", () => {
  it("returns true for [1, 2, 3] [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  }),
    it("returns true for [5, 7, 2] [5, 7, 2]", () => {
      assert.strictEqual(eqArrays([5, 7, 2], [5, 7, 2]), true);
    });
});

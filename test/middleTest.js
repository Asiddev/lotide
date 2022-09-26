// console.log(middle([1, 2, 3, 4, 5, 6, 7, 7, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// console.log();

const assert = require("chai").assert;
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

describe("#middleTest", () => {
  it("returns true for [1, 2, 3] [2]", () => {
    assert.strictEqual(
      assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true)
    );
  });
});

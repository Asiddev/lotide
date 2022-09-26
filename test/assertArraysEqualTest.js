// assertArraysEqual([1, 2, 3], [1, 2, 3]);

const assert = require("chai").assert;

const assertArraysEqual = require("../assertArraysEqual");

describe("#assertEqualTest", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3] ", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});

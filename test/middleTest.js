// console.log(middle([1, 2, 3, 4, 5, 6, 7, 7, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// console.log();
console.log("hi");

const assert = require("chai").assert;
const middle = require("../middle");

describe("#middleTest", () => {
  it("returns true for [1, 2, 3] [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

// // TEST CODE
// const assertEqual = require("../assertEqual");

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const assert = require("chai").assert;

describe("#assertEqualTest", () => {
  it("returns true for [1,1]", () => {
    assert.strictEqual(1, 1);
  });
});

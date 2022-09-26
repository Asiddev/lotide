const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

describe("#takeUntil", () => {
  it("returns array of numbers that are greater than 4", () => {
    assert.deepEqual(
      takeUntil(numbers, (n) => n === 4),
      [1, 2, 3]
    );
  }),
    it("returns given array of words till word starts with 'm'", () => {
      assert.deepEqual(
        takeUntil(words, (word) => word[0] === "m"),
        ["ground", "control", "to"]
      );
    });
});

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];

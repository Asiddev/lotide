const map = require("../map");
const assert = require("chai").assert;

describe("#map", () => {
  it("returns first letter of array of words as array", () => {
    assert.deepEqual(
      map(words, (x) => x[0]),
      ["p", "p", "e", "p"]
    );
  });
  it("returns the squares of an array of numbers", () => {
    assert.deepEqual(
      map(numbers, (n) => n * n),
      [1, 4, 9, 16, 25, 36]
    );
  });
});

const words = ["peter", "parker", "eats", "potatoes"];
const numbers = [1, 2, 3, 4, 5, 6];

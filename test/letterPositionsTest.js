const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("returns '{a: [0, 2], b: [1, 3, 5, 7], c: [6, 8], d: [10, 11], f: [12, 14], g: [13]}' for 'abab bcbc ddfgf'", () => {
    assert.deepEqual(letterPositions("abab bcbc ddfgf"), {
      a: [0, 2],
      b: [1, 3, 5, 7],
      c: [6, 8],
      d: [10, 11],
      f: [12, 14],
      g: [13],
    });
  });
});

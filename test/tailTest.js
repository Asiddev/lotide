// const assertEqual = require("../assertEqual");

// assertEqual();

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const tail = require("../tail");

describe("#tailTest", () => {
  it("returns true for [5, 6, 7] [6, 7]", () => {
    assert.strictEqual(eqArrays(tail([5, 6, 7]), [6, 7]), true);
  });
});

// const assertEqual = require("../assertEqual");

// assertEqual();

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

const assert = require("chai").assert;
const tail = require("../tail");

describe("#tailTest", () => {
  it("should return [LightHouse, Labs] for [Yo Yo ,Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});

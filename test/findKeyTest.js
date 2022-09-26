const findKey = require("../findKey");
const assert = require("chai").assert;

describe("#findKey", () => {
  it("returns key 'Akaleri' for movie with rating 3", () => {
    const movies = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 5 },
    };
    assert.strictEqual(
      findKey(movies, (x) => x.stars === 3),
      "Akaleri"
    );
  });
});

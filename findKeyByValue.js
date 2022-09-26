// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} `);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected} `);
//   }
// };

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (obj, str) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === str) {
      return key;
    }
  }
  return obj[str];
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;

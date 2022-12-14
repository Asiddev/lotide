// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected} `);
  }
};

const findKey = function (obj, cb) {
  let result = [];
  for (let key of Object.keys(obj)) {
    if (cb(obj[key])) {
      result.push(key);

      break;
    }
  }

  return result.join("");
};

// findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 2
//   ),
//   "noma"
// );
// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 3
//   ),
//   "Akaleri"
// );

module.exports = findKey;

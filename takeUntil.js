const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:${arr1} === ${arr2} `);
  } else console.log(`🛑🛑🛑 Assertion Failed:${arr1} !== ${arr2} `);
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// const takeUntil = function (array, callback) {
//   let result = [];
//   for (let item of array) {
//     if (!callback(item)) {
//       break;
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// };

// const results = takeUntil(data1, (x) => x > 0);

// console.log(results);

// assertArraysEqual(results, [1, 2, 5, 7, 2]);

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
const takeUntil = function (array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};
// const results2 = takeUntil(data2, (x) => x === ",");

// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;

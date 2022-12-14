//1
// const map = function () {
//   const results = [];
//   return results;
// };

//2
// const map = function (array, callback) {
//   // temporary code:
//   console.log("array: ", array);
//   console.log("callback: ", callback);

//   const results = [];
//   return results;
// };
//3
// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log("item BEFORE: ", item);
//     console.log("item AFTER: ", callback(item));
//     console.log("---");
//   }
//   return results;
// };
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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// const words = ["ground", "control", "to", "major", "tom"];
// const words = ["alex", "lighthouse", "kora"];
// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// // assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results1, ["a", "l", "k"]);

module.exports = map;

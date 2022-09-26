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
    console.log(eqArrays(arr1, arr2));
    console.log(`✅✅✅ Assertion Passed:${arr1} === ${arr2} `);
  } else console.log(`🛑🛑🛑 Assertion Failed:${arr1} !== ${arr2} `);
};

// const middle = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length % 2 !== 0) {
//       let middle = Math.ceil(arr.length / 2);
//       return [middle];
//     } else {
//       let first = Math.ceil(arr.length / 2);
//       let second = Math.ceil(arr.length / 2) + 1;
//       return [first, second];
//     }
//   }
//   return middle;
// };

//removed else
const middle = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 !== 0) {
      let middle = Math.ceil(arr.length / 2);
      return [middle];
    }
    let first = Math.ceil(arr.length / 2);
    let second = Math.ceil(arr.length / 2) + 1;
    return [first, second];
  }
  return middle;
};

module.exports = middle;

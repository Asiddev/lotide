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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed:${inspect(actual)} === ${inspect(expected)} `
    );
  } else
    console.log(
      `🛑🛑🛑 Assertion Failed:${inspect(actual)} !== ${inspect(expected)} `
    );
};

// assertObjectsEqual({ a: 1, b: 1 }, { a: 1, b: 1 }); // ---> true

// assertObjectsEqual({ a: 1, b: 1 }, { a: 1, b: 2 }); // ---> false

// assertObjectsEqual({ b: 2, a: 1 }, { a: 1, b: 2 }); // ---> true

// assertObjectsEqual({ a: 1, b: [1, 2] }, { a: 1, b: 1 }); // ---> false

// assertObjectsEqual({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] }); // ---> true

// assertObjectsEqual({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2, 3] }); // ---> false

module.exports = assertObjectsEqual;

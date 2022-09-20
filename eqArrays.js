const assertEqual = function (actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length === expected.length) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected} `);
          return;
        }
      }
      console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} `);
    }
  } else {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} `);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected} `);
    }
  }
  return;
};

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
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true);
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false);

console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false)
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true)
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
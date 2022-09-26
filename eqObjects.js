const eqArrays = function (arr1, arr2) {
  const sameLength = arr1.length === arr2.length;
  if (!sameLength) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const isArray = Array.isArray(arr1[i]) && Array.isArray(arr2[i]);
    if (isArray) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected} `);
  }
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    console.log(object1[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      //This is where we implement recusively calling eqObjects
      return false;
    }
  }
  return true;
};
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// // console.log(eqObjects({ a: 1, b: 2 }, { a: 1, b: 2 }));
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // recursive senario

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const abcd = { a: "1", b: "1" };
// const bacd = { b: "2", a: "1" };
// console.log(eqObjects(abcd, bacd)); // => false

// const abch = { a: "1", c: "3", b: "2" };
// const cdf = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(abch, cdf)); // => true

//2

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // console.log(eqObjects(cd, dc)); // => true

// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // console.log(eqObjects(cd, cd2)); // => false

// assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;

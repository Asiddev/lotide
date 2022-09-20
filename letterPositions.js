const eqArrays = function (arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(
      `✅✅✅ Assertion Passed:${JSON.stringify(arr1)} === ${JSON.stringify(
        arr2
      )} `
    );
  } else {
    return false;
  }

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
  console.log("finished");
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:${arr1} === ${arr2} `);
  } else console.log(`🛑🛑🛑 Assertion Failed:${arr1} !== ${arr2} `);
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }

    if (results.hasOwnProperty(sentence[i])) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

// console.log(assertArraysEqual(letterPositions("hello").e, [1]));
// console.log(assertArraysEqual(letterPositions("hello").h, [0]));

console.log(assertArraysEqual(letterPositions("hello").o, [4]));

// console.log(
//   assertArraysEqual(
//     eqArrays(letterPositions("lighthouse in the house"), {
//       l: [0],
//       i: [1, 11],
//       g: [2],
//       h: [3, 5, 15, 18],
//       t: [4, 14],
//       o: [6, 19],
//       u: [7, 20],
//       s: [8, 21],
//       e: [9, 16, 22],
//       n: [12],
//     }),
//     true
//   )
// );

// console.log(
//   assertArraysEqual(
//     eqArrays(letterPositions("lighthouse in the house")),
//     {
//       l: [0],
//       i: [1, 11],
//       g: [2],
//       h: [3, 5, 15, 18],
//       t: [4, 14],
//       o: [6, 19],
//       u: [7, 20],
//       s: [8, 21],
//       e: [9, 16, 22],
//       n: [12],
//     },
//     true
//   )
// );

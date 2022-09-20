const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(
      `✅✅✅ Assertion Passed:${JSON.stringify(actual)} === ${JSON.stringify(
        expected
      )} `
    );
    return false;
  }
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
};

const countLetters = function (str) {
  const letters = str.split("");
  let solution = {};

  for (let letter of letters) {
    if (solution[letter]) {
      solution[letter] += 1;
    } else {
      solution[letter] = 1;
    }
  }

  console.log(solution);

  return solution;
};

// console.log(countLetters("LHL"));

console.log(assertEqual(countLetters("LHL"), { L: 2, H: 1 }));

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected} `);
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

  return solution;
};

console.log(countLetters("LHL"));

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected} `);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let solution = {};
  for (let i = 0; i < allItems.length; i++) {
    // console.log(allItems[i]);
    Object.keys(itemsToCount).forEach((item) => {
      if (itemsToCount[item] && allItems[i] === item) {
        if (solution.hasOwnProperty(item)) {
          solution[item] += 1;
        } else {
          solution[item] = 1;
        }
      }
    });
  }
  return solution;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;

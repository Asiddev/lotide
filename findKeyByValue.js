const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(
      `✅✅✅ Assertion Passed:${JSON.stringify(actual)} === ${JSON.stringify(
        actual
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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (obj, str) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === str) {
      return key;
    }
  }
  return obj[str];
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

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
};

const tail = function (array) {
  return array.slice(1);
};

assertEqual(tail([5, 6, 7]), [6, 7]);

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
console.log(tail(["Hello", "Lighthouse", "Labs"]));

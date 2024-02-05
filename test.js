import fizzBuzz from "./index.js";

const numbers = {
  1: 1,
  2: 2,
  3: "Fizz",
  4: 4,
  5: "Buzz",
  6: "Fizz",
  7: 7,
  8: 8,
  9: "Fizz",
  10: "Buzz",
  11: 11,
  12: "Fizz",
  13: 13,
  14: 14,
  15: "FizzBuzz",
};

Object.entries(numbers).forEach(([testInput, expectedOutput]) => {
  test(
    `${testInput} returns ${expectedOutput}`,
    fizzBuzz(testInput),
    expectedOutput,
  );
});

function test(name, actual, expected) {
  if (String(actual) !== String(expected)) {
    console.error(`${name} failed (got ${actual})`);
  } else {
    console.log(name);
  }
}

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
}

Object.values(numbers).forEach(([testInput, expectedOutput]) => {
    test(`${testInput} returns ${expectedOutput}`)
})

function test(name, actual, expected){
    if (actual !== expected){
        console.error(`${name} failed:\nGot ${actual}`)
    } else {
        console.log(name)
    }
}
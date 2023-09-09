// TODO: Write your function in this file
let fizzBuzz = (lower, upper) => {
    const arr = []

    if (lower > upper) {
        console.log('ERROR: You must start with a number lower than the upper number')
    }

    for (i = lower; i <= upper; i++) {
        (i % 3 === 0 && i % 5 === 0) ? arr.push('FizzBuzz')
        : (i % 5 === 0 ) ? arr.push('Buzz')
        : (i % 3 === 0) ? arr.push('Fizz')
        : (arr.push(i))
    } 

    return arr
}

console.log(fizzBuzz(1, 15))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz

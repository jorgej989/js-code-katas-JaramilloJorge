/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
If number is odd print 'Odd' instead of the number.
If number is even print 'Even' instead of number.
Print number as a string, if it does not meet above two conditions, means if number is Prime.
 */
import { isPrime } from "./fizzBuzzWhizz"

const game = (num1, num2) => {
    if (!isNumeric(num1) || !isNumeric(num2)) {
        return ''
    }

    let resp = []
    let min = Math.min(num1, num2)
    let max = Math.max(num1, num2)

    for (let i = min; i <= max; i++) {
        let value
        if (isPrime(i)) {
            value = i;
        } else {
            value = isEven(i) ? 'Even' : 'Odd';
        }
        resp.push(value)
    }

    if (num1 > num2) {
        resp = resp.reverse()
    }

    return resp.join('')
}

const isNumeric = (num) => !isNaN(parseInt(num))

const isEven = (num) => num % 2 == 0

export { game, isNumeric };
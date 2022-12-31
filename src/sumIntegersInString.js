/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld1'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/
import { isNumeric } from "./oddEvenPrime"

const sumOfIntegersInString = (input) => {
    let resp = 0
    let numbers = getNumbers(input);
    numbers.map((num) => {
        resp += parseInt(num)
    })
    getNumbers(input)
    return resp
}

const getNumbers = (str) => {
    let numbers = []
    let ini = -1
    for (let i = 0; i <= str.length; i++) {
        if(isNumeric(str[i]) && ini < 0){
            ini = i
        }
        if(!isNumeric(str[i]) && ini > -1){
            numbers.push(str.substring(ini, i))
            ini = -1
        }
    }
    return numbers
}

export { sumOfIntegersInString }
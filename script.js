let firstNumber = 0;
let secondNumber = 0;
let operator;



function add(...args) {
    let additionArray = args;
    const addition = additionArray.reduce((sum, current) => 
         sum + current);
        return `Total: ${addition}`
}
// console.log(add(25,25,25,25));

function subtract(a,  b) {
const subtraction = a - b
    console.log(subtraction);
    return subtraction
}
// subtract(100,25)

function multiply(a, b) {
    const multiplication = a * b;
    return multiplication;
}

function divide(a, b) {
    const division = a / b;
    return division;
}

function operate(a,b, operator, fn) {
let result = fn(a + operator + b)
return result;
}

let firstNumber = '';
let secondNumber = '';
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

const buttonsContainer = document.querySelector('.calculator-buttons')
const buttonsNodeList = buttonsContainer.querySelectorAll('button')
// console.log(buttonsNodeList);

const display = document.querySelector('.calculator-display')

function updateFirstNumber(...args) {
    let numbers = args;
    firstNumber += numbers;
    }
function updateDisplay() {
    return display.textContent = firstNumber; 
}



buttonsNodeList[2].addEventListener('click', () => {
updateFirstNumber(7)
updateDisplay()
} )
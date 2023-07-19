let allValues = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';



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

function operate() {
return firstNumber + operator + secondNumber;

}

const buttonsContainer = document.querySelector('.calculator-buttons')
const buttonsNodeList = buttonsContainer.querySelectorAll('button')
// console.log(buttonsNodeList);

const display = document.querySelector('.calculator-display')

function userInput(...args) {
    let values = args;
    allValues += values;
    checkOperator();
    }
function checkOperator(input) {
    input = allValues;
    if (input.includes('+')) {
        return operator = '+';
        }
        
}
function destructureAllValues() {
    let str = allValues;
    const [first, second] = str.split('+');
firstNumber = first;
secondNumber = second;
}


    function updateDisplay() {
    return display.textContent = allValues; 
}


buttonsNodeList[2].addEventListener('click', () => {
userInput(7)
updateDisplay()
} )
buttonsNodeList[13].addEventListener('click', () => {
userInput('+')
    updateDisplay
})
buttonsNodeList[16].addEventListener('click', () => {
    destructureAllValues()
  alert(firstNumber)  
})
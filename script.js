let allValues = '';
let firstNumber = '';
let secondNumber = '';
let operator = [];
let result = [];


function add(...args) {
    let additionArray = args;
    const addition = additionArray.reduce((sum, current) => 
         sum + current);
         result.push (addition);
         console.log(addition);
       return display.textContent = addition;
        
}

function subtract(a,  b) {
const subtraction = a - b
result.push(subtraction)
        return display.textContent = subtraction
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
if (operator[operator.length - 1] === '+') {
    add(+firstNumber, +secondNumber)
} 
if (operator[operator.length - 1] === '-') {
    subtract(+firstNumber, +secondNumber)
}
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
        // return operator = '+';
        return operator.push('+')
    }
    if (input.includes('-')) {
// return operator = '-'
return operator.push('-')
        }
}
function destructureAllValues() {
    let str = allValues;
   let [first, second] = '';
    if (str.includes('+')) {
    [first, second] = str.split('+') 
    }
    if (str.includes('-')) {
        [first, second] = str.split('-') 
    }
    firstNumber = first;
secondNumber = second;
console.log(second);
}


    function updateDisplay() {
    return display.textContent = allValues; 
}

function clearAc() {
    allValues = '';
    firstNumber = '';
    secondNumber = '';
    display.textContent = '';
    
    }

    function isStringCalculation() {
        if (operator.length > 1) {
            return true;
        }
    }
    


    buttonsNodeList[0].addEventListener('click', () => {
        clearAc();
    })
buttonsNodeList[2].addEventListener('click', () => {
userInput(7)
updateDisplay()
} )
buttonsNodeList[9].addEventListener('click', () => {
    userInput('-')
    updateDisplay()
})
buttonsNodeList[13].addEventListener('click', () => {
userInput('+')
    updateDisplay
isStringCalculation()

})
buttonsNodeList[16].addEventListener('click', () => {
    destructureAllValues()
operate();

})

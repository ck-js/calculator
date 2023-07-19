let allValues = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';



function add(...args) {
    let additionArray = args;
    const addition = additionArray.reduce((sum, current) => 
         sum + current);
       return display.textContent = addition;
        
}
// console.log(add(25,25,25,25));

function subtract(a,  b) {
const subtraction = +a - +b
console.log(typeof subtraction);
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
if (operator === '+') {
    add(+firstNumber, +secondNumber)
} 
if (operator === '-') {
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
        return operator = '+';
    }
    if (input.includes('-')) {
return operator = '-'
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
})
buttonsNodeList[16].addEventListener('click', () => {
    destructureAllValues()
operate();

})

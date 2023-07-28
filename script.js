
const currentDisplay = document.querySelector('.calculator-display')
currentDisplay.textContent = '55555'
const previousDisplay = document.querySelector('.previous-display')

const currentObject = {}
const previousObject = {}

const numberBtns = Array.from(document.getElementsByClassName('number-btn'))
const operatorBtns = Array.from(document.getElementsByClassName('operator-btn'))
const zeroBtn = document.getElementById('0')
const equal = document.getElementById('equal')

numberBtns.forEach(btn => 
    btn.addEventListener('click', e =>
addNumber(e.target.textContent)
))
operatorBtns.forEach(btn => 
    btn.addEventListener('click', e =>
    addOperator(e.target.textContent))
    )

zeroBtn.addEventListener('click', e => {
    alert(e.target.textContent)
})

equal.addEventListener('click', calculate)



function calculate() {

    currentObject.calculate = function() {
if (this.operator === '+') {
    let result = `${+this.firstNum + +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(result)
}
    }
currentObject.calculate();
}


function addNumber(e) {

    if (!('secondNum' in currentObject) && (
        !('operator' in currentObject))) {
    if (!('firstNum' in currentObject)) {
currentObject['firstNum'] = '';
currentObject['firstNum'] += e;
} else {
currentObject['firstNum'] += e;    
}
    }

if (('firstNum' in currentObject) && (
    'operator' in currentObject)) {
        if (!('secondNum' in currentObject)) {
        currentObject['secondNum'] = '';
        currentObject['secondNum'] += e;
    }    else {
        currentObject['secondNum'] += e;
    }
}

   
currentDisplay.textContent = currentObject['firstNum']


    }
function addOperator(e) {

    if (!('operator' in currentObject)) {
        currentObject['operator'] = e;
    }else {
        currentObject['operator'] = e;
    }
    
}

function addResult(number) {
    currentObject['result'] = number;
    
    }
    








function Operation(firstNum,secondNum,operator) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    this.operator = operator;
    this.calculate = function() {
        if (this.operator === '+') {
            const result = this.firstNum+ this.secondNum;
console.log(result);
            return result;
        }
        if (this.operator === '-') {
            const result = firstNum - secondNum;
            console.log(result);
            return result;
        }
        
    }
}





function add(...args) {
    let additionArray = args;
    const addition = additionArray.reduce((sum, current) => 
         sum + current);
               return addition
        
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



const currentDisplay = document.querySelector('.calculator-display')
currentDisplay.textContent = '55555'
const previousDisplay = document.querySelector('.previous-display')

const currentObject = {}
const nextObject = {}

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

equal.addEventListener('click', () => {
    
    !('operator' in nextObject) ?
    calculate(currentObject) :
    calculate(nextObject);

    displayResult();
})


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

if (!('operator' in nextObject)) {
if (('firstNum' in currentObject) && (
    'operator' in currentObject)) {
        if (!('secondNum' in currentObject)) {
        currentObject['secondNum'] = '';
        currentObject['secondNum'] += e;
    }    else {
        currentObject['secondNum'] += e;
    }
}
}

if (('firstNum' in nextObject) && 
('operator' in nextObject)) {
if (!('secondNum' in nextObject)) {
nextObject['secondNum'] = '';
nextObject['secondNum'] += e;

} else {
    nextObject['secondNum'] += e;
}
}
   updateCurrentDisplay();



    }

function updateCurrentDisplay() {
    !('secondNum' in currentObject) ?
    currentDisplay.textContent = currentObject['firstNum'] :
    currentDisplay.textContent = currentObject['secondNum']; 
}





function addOperator(e) {

!('secondNum' in currentObject) ?
currentObject['operator'] = e :
nextObject['operator'] = e;


    // if (!('operator' in currentObject)) {
    //     currentObject['operator'] = e;
    // }else {
    //     currentObject['operator'] = e;
    // }
    
addFirstResultToSecondOperation() 
}


function addFirstResultToSecondOperation() {
('operator' in nextObject) ?
nextObject['firstNum'] = currentObject['result'] :

console.log('Second operation has not began');
}



 

function calculate(obj) {

obj.calculate = function() {
if (this.operator === '+') {
    let result = `${+this.firstNum + +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(result)
}
if (this.operator === '-') {
    let result = `${+this.firstNum - +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(result)
}
if (this.operator === '*') {
    let result = `${+this.firstNum * +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(result)
}
if (this.operator === '/') {
    let result = `${+this.firstNum / +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(result)
}
}
obj.calculate();
}

function addResult(number) {
    currentObject['result'] = number;
    
    }
    
function displayResult() {

currentDisplay.textContent =
currentObject['result']

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


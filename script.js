
const currentDisplay = document.querySelector('.calculator-display')
currentDisplay.textContent = '55555'
const previousDisplay = document.querySelector('.previous-display')

const currentObject = {}
const nextObject = {}

const numberBtns = Array.from(document.getElementsByClassName('number-btn'))
const operatorBtns = Array.from(document.getElementsByClassName('operator-btn'))
const zeroBtn = document.getElementById('0')
const equal = document.getElementById('equal')
const allClear = document.getElementById('ac')

numberBtns.forEach(btn => 
    btn.addEventListener('click', e =>
addNumber(e.target.textContent)
))
operatorBtns.forEach(btn => 
    btn.addEventListener('click', e =>
    addOperator(e.target.textContent))
    )

let firstZeroInput = false;
zeroBtn.addEventListener('click', e => {
    if (!(firstZeroInput)) {
        addNumber(e.target.textContent)
        firstZeroInput = true;
    }
if (currentObject.firstNum.length >= 2) {
    firstZeroInput = false;
}
    
})

equal.addEventListener('click', () => {
    
   if (!('operator' in nextObject)) {
    calculate(currentObject);
    displayResult(currentObject); 
   } else {
    calculate(nextObject);
    displayResult(nextObject); 
}
    
})

allClear.addEventListener('click', () => {
    clearAllProperties(currentObject)
    clearAllProperties(nextObject)
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
    if (!('secondNum' in nextObject)) {
    !('secondNum' in currentObject) ?
    currentDisplay.textContent = currentObject['firstNum'] :
    currentDisplay.textContent = currentObject['secondNum']; 
} else {
    currentDisplay.textContent = nextObject['secondNum']; 
}
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
    addResult(obj, result)
}
if (this.operator === '-') {
    let result = `${+this.firstNum - +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(obj, result)
}
if (this.operator === '*') {
    let result = `${+this.firstNum * +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(obj, result)
}
if (this.operator === '/') {
    let result = `${+this.firstNum / +this.secondNum}`
    alert(result)
    // currentObject['result'] = result
    addResult(obj, result)
}
}
obj.calculate();
}

function addResult(obj, number) {
    obj['result'] = number;
    
    }
    
function displayResult(obj) {

currentDisplay.textContent =
obj['result']

} 


function clearAllProperties(obj) {
    for (let prop in obj) {
        delete obj[prop];
    }
    clearCurrentDisplay()
    console.log(currentObject);
}
function clearCurrentDisplay() {
currentDisplay.textContent = ' ';

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




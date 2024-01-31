
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
const decimal = document.getElementById('decimal')
const deleteNumber = document.getElementById('delete')






const kbdNumberInput = window.addEventListener('keydown', e => {
    
    for (let i = 0; i <= 9; i++) {
    if (e.key.includes([i])) {
    addNumber(e.key)
    addBorder(e)
}
    }

})

const kbdOperatorInput = window.addEventListener('keydown', e =>{
    if (e.keyCode == '187') {
        if (e.key == '+') {
            addOperator('+')
        }
        // if (e.key == '=') {
        //     addOperator('=')
        // }
    }
if (e.key == '-') {
    addOperator('-')
}
if (e.key == '*') {
    addOperator('*')
}
if (e.key == '/') {
    addOperator('/')
}
if (e.keyCode == '13') {
    if (('firstNum' in currentObject) && ('secondNum' in currentObject) ||
    ('firstNum' in nextObject) && ('secondNum' in nextObject)){
    
   if (!('operator' in nextObject)) {
    calculate(currentObject);
    displayResult(currentObject); 
   } else {
    calculate(nextObject);
    displayResult(nextObject); 
}
    } else {
        return;
    }

}
if (e.keyCode == '8') {
    
    if ('secondNum' in nextObject) {
        deleteLastNumber(nextObject, 'secondNum')    
    }
    else if ('secondNum' in currentObject) {
        deleteLastNumber(currentObject, 'secondNum')    
    }
    else if ('firstNum' in currentObject) {
        deleteLastNumber(currentObject, 'firstNum')    
    }


}

console.log(e.keyCode);
})

numberBtns.forEach(button => {
    button.addEventListener('click', e => {
        addNumber(e.target.textContent)
        addBorder(e)
    })
})

function addBorder(e) {
numberBtns.forEach(btn => {
    btn.classList.remove('clicking')
    
})
e.target.classList.add('clicking')

}






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

if ((currentObject.firstNum.length >= 2)) {
    firstZeroInput = false;
}

if ('operator' in currentObject) {
        firstZeroInput = true;
}

if ('secondNum' in currentObject) {
    firstZeroInput = false;
    
    firstZeroInput = true;
}
if ((currentObject.secondNum.length >= 2)) {
    firstZeroInput = false;
}

if ('result' in currentObject) {
    firstZeroInput = true;
}
if ((nextObject.secondNum.length >= 2)) {
    firstZeroInput = false;
}

})

equal.addEventListener('click', () => {

    if (('firstNum' in currentObject) && ('secondNum' in currentObject) ||
    ('firstNum' in nextObject) && ('secondNum' in nextObject)){
    

   if (!('operator' in nextObject)) {
    calculate(currentObject);
    displayResult(currentObject); 
   } else {
    calculate(nextObject);
    displayResult(nextObject); 
}
    } else {
        return;
    }

})

allClear.addEventListener('click', () => {
    clearAllProperties(currentObject)
    clearAllProperties(nextObject)
})

decimal.addEventListener('click', e => {
    if (!('secondNum' in currentObject)) {
    addDecimal('firstNum', e.target.textContent)

    } else {
        addDecimal('secondNum', e.target.textContent)
    }
})    

deleteNumber.addEventListener('click', () => {
    
    if ('secondNum' in nextObject) {
        deleteLastNumber(nextObject, 'secondNum')    
    }
    else if ('secondNum' in currentObject) {
        deleteLastNumber(currentObject, 'secondNum')    
    }
    else if ('firstNum' in currentObject) {
        deleteLastNumber(currentObject, 'firstNum')    
    }
    
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

decimalInput = false;
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

if (obj.result === 'Infinity') {
     currentDisplay.textContent =
'to the moon';

       
}

else {
    currentDisplay.textContent =
obj['result'];
previousDisplay.textContent =
`${obj['firstNum']} ${obj['operator']} ${obj['secondNum']}`
}
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


let decimalInput = false;
function addDecimal(objProp,decimal) {
    
alert(objProp)
    

    if (!(decimalInput) && !(objProp in currentObject) 
    ) {
        addNumber('0' +decimal);
        decimalInput = true; 
        alert('1')
    }

    if ('operator' in currentObject &&
    !(decimalInput) && 
  !('secondNum' in currentObject)  ) {
        addNumber('0' +decimal);
        decimalInput = true; 
        alert('3')
    }

    if (('firstNum'in nextObject) &&
    !(decimalInput) &&
    !('secondNum' in nextObject)) {
        addNumber('0' +decimal);
        decimalInput = true; 
    alert('4')
    
    }
    

    if ((objProp in currentObject) && 
    !(decimalInput)    ) {
            addNumber(decimal)
            decimalInput = true;
            alert('2')
        }
    
    
}

function deleteLastNumber(obj, key) {
    let firstOperand = obj[key];
    let newOperand = firstOperand.slice(0, -1)
    obj[key] = newOperand;

    currentDisplay.textContent = obj[key];
    
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






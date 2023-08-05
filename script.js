let firstNumber = "";
let secondNumber = "";
let operator = null;
let shouldReset = false;
let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber; 
let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;
const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');
const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const decimalBtn = document.querySelector('[data-decimal]');
const equalBtn = document.querySelector('[data-equal]');
let firstOperand = null;
let secondOperand = null;

function operate (firstNumber, operator, secondNumber) {
    if(operator === "+") {
        return add(firstNumber, secondNumber);
    } else if(operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if(operator === "×") {
        return multiply(firstNumber, secondNumber);
    } else if(operator === "÷") {
        return divide(firstNumber, secondNumber);
    } else {
        return "ERROR"
    }
}

numberBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', (data) => {
        secondScreen.textContent += numberBtn.textContent;
        secondOperand = secondScreen.textContent;
    })
});

operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (data) => {
        if (firstOperand === null) {
            operator = operatorBtn.textContent;
            firstOperand = secondOperand;
            firstScreen.textContent += `${firstOperand} ${operator}`;
            shouldReset = false;         
            resetScreen();
        } else {
            let a = parseInt(firstOperand);
            let b = parseInt(secondOperand);
            result = operate(a, operator, b);
            operator = operatorBtn.textContent;
            firstScreen.textContent = `${result} ${operator}`
            firstOperand = firstScreen.textContent;
            resetScreen();
        }
    })
})

equalBtn.addEventListener('click', () => {
    resetScreen();
    let a = parseInt(firstOperand);
    let b = parseInt(secondOperand);
    result = operate(b, operator, a);
    firstScreen.textContent = `${result}`
    firstOperand = firstScreen.textContent;
    secondOperand = result;
    shouldReset = false;
    resetScreen();
})


function resetScreen() {
    if (firstOperand !== null || !shouldReset) {
    
    secondScreen.textContent = ""
    }
}

function calculate() {
    let a = parseInt(firstOperand);
    let b = parseInt(secondOperand);
    result = operate(b, operator, a);
}
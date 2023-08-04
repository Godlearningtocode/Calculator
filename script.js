let firstNumber = "";
let secondNumber = "";
let operator = null;
let shouldReset = false;
let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber; 
let divide = (firstNumber, secondNumber) => secondNumber / firstNumber;
const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');
const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const decimalBtn = document.querySelector('[data-decimal]');
const equalBtn = document.querySelector('[data-equal]');



function operate (firstNumber, operator, secondNumber) {
    if(operator === "+") {
        return add(firstNumber, secondNumber);
    } else if(operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if(operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if(operator === "÷") {
        return divide(firstNumber, secondNumber);
    } else {
        return "ERROR"
    }
}

numberBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', (data) => {
        resetScreen();
        secondScreen.textContent += numberBtn.textContent;
        firstOperand = secondScreen.textContent;
    })
});

operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (data) => {
        operator = operatorBtn.textContent;
        firstScreen.textContent += secondScreen.textContent + (" " + operator + " ");
        secondOperand = secondScreen.textContent; 
        
    })
})

equalBtn.addEventListener('click', () => {
    resetScreen();
    let a = parseInt(firstOperand);
    let b = parseInt(secondOperand);
    firstScreen.textContent = b + " " + operator + " " + a + " " + "=";
    secondScreen.textContent = operate(a, operator, b); 
})


function resetScreen() {
    if (firstScreen.textContent !== "" && !shouldReset) {
    shouldReset = true
    secondScreen.textContent = ""
    }
}
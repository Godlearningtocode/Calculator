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
const reset = document.querySelector('.container');
let firstOperand = null;
let secondOperand = null;
let result = null;

function operate (firstNumber, operator, secondNumber) {
    if(operator === "+" && firstNumber !== null && secondNumber !== null) {
        return add(firstNumber, secondNumber);
    } else if(operator === "-" && firstNumber !== null && secondNumber !== null) {
        return subtract(firstNumber, secondNumber);
    } else if(operator === "×" && firstNumber !== null && secondNumber !== null) {
        return multiply(firstNumber, secondNumber);
    } else if(operator === "÷" && firstNumber !== null && secondNumber !== null) {
        return divide(firstNumber, secondNumber);
    } else {
        return "ERROR"
    }
}

numberBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', (data) => {
        if (result === null) {
            appendNumber(numberBtn.textContent);
        }
    })
});

operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (data) => {
        if (firstOperand === null && secondOperand === null) {
            clear()
            operator = operatorBtn.textContent;
            firstOperand = solution;
            firstScreen.textContent += `${firstOperand} ${operator}`;
            shouldReset = false;         
            resetScreen();
        } else if (firstOperand === null) {
            operator = operatorBtn.textContent;
            firstOperand = secondOperand;
            firstScreen.textContent += `${firstOperand} ${operator}`;
            secondOperand = null;
            shouldReset = false;         
            resetScreen();
        } else if (result === null) {
            if (operator === '÷' && firstOperand === "0") {
                clear();
                return firstScreen.textContent = "Please don't make us crash!";
            } else {
                calculate();
                operator = operatorBtn.textContent;
                firstScreen.textContent = `${solution} ${operator}`
                firstOperand = firstScreen.textContent;
                resetScreen();
            }
        }
    })
})

equalBtn.addEventListener('click', () => {
    if (result === null) {
        if (operator === '÷' && firstOperand === "0") {
            clear();
            return firstScreen.textContent = "Please don't make us crash!";
        } else {
            resetScreen();
            calculate(result)
            firstScreen.textContent = `${solution}`
            shouldReset = false;
            resetScreen();
        }
    } else {
        return;
    }
})

deleteBtn.addEventListener('click', () => {
    secondScreen.textContent = ""
})

clearBtn.addEventListener('click', () => {
    return clear();
})

function resetScreen() {
    if (firstOperand !== null || !shouldReset) {
    secondScreen.textContent = ""
    }
}

function appendNumber(number) {
    secondScreen.textContent += number;
    secondOperand = secondScreen.textContent;
}

function calculate(result) {
    if (firstOperand !== null && secondOperand !== null) {
        let a = parseInt(firstOperand);
        let b = parseInt(secondOperand);
        solution = operate(a, operator, b);
        firstOperand = null;
        secondOperand = null;
    } else 
    return
} 

let clear = () => {
    firstScreen.textContent = "";
    secondScreen.textContent = "";
    firstOperand = null;
    secondOperand = null;
    operator = null;
}
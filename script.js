let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber; 
let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;
const operators = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
};
const operatorsValues = Object.values(operators);
const firstOperand = "";
const secondOperand = "";

function operate (firstNumber, operator, secondNumber) {
    if(operator === "+") {
        return add(firstNumber, secondNumber);
    } else if(operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if(operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if(operator === "/") {
        return divide(firstNumber, secondNumber);
    } else {
        return "ERROR"
    }
}



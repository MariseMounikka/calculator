let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput; // Show current input
}

function setOperator(op) {
  if (firstOperand === null && currentInput !== '') {
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = ''; // Reset input after operator
    display.value = firstOperand + ' ' + operator; // Display operation so far
  } else if (currentInput !== '') {
    // If there is already an operator and number is entered, calculate result
    calculateResult();
    operator = op;
    display.value = firstOperand + ' ' + operator; // Update operation on display
    currentInput = ''; // Reset current input after operator
  }
}

function calculateResult() {
  if (firstOperand !== null && currentInput !== '') {
    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          display.value = "Error";
          return;
        }
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    display.value = firstOperand + ' ' + operator + ' ' + secondOperand + ' = ' + result;
    firstOperand = result;
    currentInput = ''; // Reset after calculation
    operator = ''; // Reset operator
  }
}

function clearDisplay() {
  currentInput = '';
  firstOperand = null;
  operator = '';
  display.value = '';
}

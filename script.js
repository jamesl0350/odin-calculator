const display = document.getElementById('display');

let x;
let y;
let operator;

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, operator, y) {
  
  let expression = display.value;

  let operatorIndex = expression.indexOf('+') !== -1 ? expression.indexOf('+') :
                      expression.indexOf('-') !== -1 ? expression.indexOf('-') :
                      expression.indexOf('*') !== -1 ? expression.indexOf('*') :
                      expression.indexOf('/') !== -1 ? expression.indexOf('/') :
                      -1;
  if (operatorIndex === -1) {
    display.value = 'Error';
    return;
  }

  x = parseFloat(expression.slice(0, operatorIndex));
  operator = expression[operatorIndex];
  y = parseFloat(expression.slice(operatorIndex + 1));

  if (isNaN(x) || isNaN(y)) {
    display.value = 'Error';
    return;
  }

  let result;

  switch (operator) {
    case '+':
    result = add(x, y)
    break;
    case '-':
    result = subtract(x, y)
    break;
    case '*':
    result = multiply(x, y)
    break;
    case '/':
    result = divide(x, y)
    break;
    default:
      result = 'Error';
  }

  display.value = result;
}

function populateDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

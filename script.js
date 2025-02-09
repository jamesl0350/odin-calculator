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
  if (operator == '+') {
    return add();
  }
  else if (operator == '-') {
    return subtract();
  }
  else if (operator == '*') {
    return multiply();
  }
  else if (operator == '/') {
    let answer = divide();
    display.value = answer;
  }
}

function populateDisplay(num) {

  let currentValue = display.value;

  display.value = currentValue + num;
}

function clearDisplay() {
  display.value = '';
}

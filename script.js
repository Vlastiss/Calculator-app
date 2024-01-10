const display = document.getElementById('display');

function appendToDisplay(symbol) {
  display.value += symbol;
}

function deleteSymbol() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let result = eval(display.value);
  display.value = parseFloat(result).toFixed(5);
}
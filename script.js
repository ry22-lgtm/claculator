let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (e) {
    currentInput = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").textContent = currentInput || "0";
}

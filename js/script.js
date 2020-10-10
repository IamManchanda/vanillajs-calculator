const calculatorDisplay = document.getElementById("calculator-display");
const allNumberButtons = [
  "number-button-0",
  "number-button-1",
  "number-button-2",
  "number-button-3",
  "number-button-4",
  "number-button-5",
  "number-button-6",
  "number-button-7",
  "number-button-8",
  "number-button-9",
].map((elNum) => document.getElementById(elNum));
const allOperatorButtons = [
  "operator-button-add",
  "operator-button-subtract",
  "operator-button-multiply",
  "operator-button-division",
  "operator-button-equals",
].map((elOpr) => document.getElementById(elOpr));
const decimalButton = document.getElementById("decimal-button");
const clearButton = document.getElementById("clear-button");

function handleAddNumbers(prevNumber, currentNumber) {
  return prevNumber + currentNumber;
}

function handleSubtractNumbers(prevNumber, currentNumber) {
  return prevNumber - currentNumber;
}

function handleMultiplyNumbers(prevNumber, currentNumber) {
  return prevNumber * currentNumber;
}

function handleDivideNumbers(prevNumber, currentNumber) {
  return prevNumber / currentNumber;
}

function handleEquateNumbers(prevNumber, currentNumber) {
  return currentNumber;
}

function handleNumberButton(number) {
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === "0" ? number : displayValue + number;
}

function handleOperatorButton(operator) {
  const operators = {
    "+": handleAddNumbers,
    "-": handleSubtractNumbers,
    "*": handleMultiplyNumbers,
    "/": handleDivideNumbers,
    "=": handleEquateNumbers,
  };
  console.log({ operator });
}

function handleDecimalButton() {
  console.log("decimal");
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function handleClearButton() {
  calculatorDisplay.textContent = 0;
}

allNumberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    handleNumberButton(numberButton.value);
  });
});
allOperatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    handleOperatorButton(operatorButton.value);
  });
});
decimalButton.addEventListener("click", handleDecimalButton);
clearButton.addEventListener("click", handleClearButton);

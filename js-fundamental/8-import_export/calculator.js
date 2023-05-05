function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  if (operand2 === 0) {
    throw Error("Divider cannot be 0");
  }
  return operand1 / operand2;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

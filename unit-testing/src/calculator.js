export function add(op1, op2) {
  return op1 + op2;
}

export function subtract(op1, op2) {
  return op1 - op2;
}

export function multiply(op1, op2) {
  return op1 * op2;
}

export function divide(op1, op2) {
  if (op2 === 0) {
    throw Error('Divider cannot be 0');
  }
  return op1 / op2;
}

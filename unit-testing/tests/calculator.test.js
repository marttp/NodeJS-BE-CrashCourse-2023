import { add, subtract, multiply, divide } from '../src/calculator';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 5 - 10 to equal -5', () => {
  expect(subtract(5, 10)).toBe(-5);
});

test('multiply 20 * 10 to equal 200', () => {
  expect(multiply(20, 10)).toBe(200);
});

test('divide 20 / 10 to equal 2', () => {
  expect(divide(20, 10)).toBe(2);
});

test('divide 20 / 0 is should error', () => {
  expect(() => divide(20, 0)).toThrow();
});

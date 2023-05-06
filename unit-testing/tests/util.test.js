import { sum, moveZero } from '../src/util';

test('sum 5,6,7 to equal 18', () => {
  expect(sum(5, 6, 7)).toBe(18);
});

test('sum without argument to equal 0', () => {
  expect(sum()).toBe(0);
});

test('Move zero with [0,4,5,6,0,3,0,3] should be [4,5,6,3,3,0,0,0]', () => {
  expect(moveZero([0,4,5,6,0,3,0,3]))
    .toStrictEqual([4,5,6,3,3,0,0,0]);
});

test('Move zero with none argument should be throw error', () => {
  expect(() => moveZero()).toThrow();
});
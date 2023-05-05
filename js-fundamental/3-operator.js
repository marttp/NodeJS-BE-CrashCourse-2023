/**
 * Math
 */
const addValue = 20 + 10; // 30
const subtractValue = 20 - 10; // 10
const multiplyValue = 20 * 10; // 200
const divideValue = 20 / 10; // 2
const moduloValue = 23 % 10; // 3

/**
* Increment/Decrement
*/
let incrementDecrementValue = 0;
console.log(++incrementDecrementValue); // +1 reflect before this line complete
console.log(incrementDecrementValue++); // +1 reflect after this line complete
console.log(incrementDecrementValue);

console.log(--incrementDecrementValue); // -1 reflect before this line complete
console.log(incrementDecrementValue--); // -1 reflect after this line complete
console.log(incrementDecrementValue);

/**
* Relation
* <, <=, >, >=, !==, ===
*/
const exampleCondition = 20 <= 10;
console.log(`Condition result: ${exampleCondition}`);

/**
* Logical
* AND -> True if and only if both true
* OR -> True if one of them true, False if and only if both false
*/
const firstCondition = 2000 === 2000;
const secondCondition = 'Hello' === 'Hi';
if (firstCondition && secondCondition) {
  console.log("Pass 2 cases");
} else if (firstCondition || secondCondition) {
  console.log("Pass one of them");
} else {
  console.log("Nothing pass");
}
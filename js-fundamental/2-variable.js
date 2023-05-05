// var variableWithVar = 10;
let variableWithLet = 10;
console.log(variableWithLet);
const variableWithConst = 10;
console.log(variableWithConst);

variableWithLet = 20;
console.log(variableWithLet);
// ! Cannot do it
// variableWithConst = 20;
// console.log(variableWithConst);

const variable1 = 12;

/**
Data Types
  1. Number
  2. String
  3. Array -> sequence of data
  4. Object -> group of fields which represent data
  5. Boolean -> True/False
*/
const numberInteger = 20;
const numberDecimal = 20.5;

const text = 'Hello World!';

const array = [1,2,3,4,5]; // size = 5
// array start from index-0 (0,1,2,3,4)
console.log(`Index 2: ${array[2]}`);

const user1 = {
  username: "test1",
  password: "password"
};
// Access to property static
console.log(`Username: ${user1.username}`);
// Access to property dynamic
const propertyUserName = "username";
console.log(`Username: ${user1[propertyUserName]}`);

// Example boolean
const isOkay = true;
const isNotOkay = false;
// Array (List)

// Array of integer
const sampleArray = []; // Empty array

sampleArray.push(1);
sampleArray.push(2, 3, 4, 5);

console.log(`sampleArray: ${sampleArray}`);

sampleArray.pop();
console.log(`sampleArray: ${sampleArray}`);

// Array on JS -> Stack
sampleArray.unshift(5); // Insert head
console.log(`After unshift: ${sampleArray}`);

sampleArray.push({
  message: 'OK',
});
console.log(`sampleArray: ${sampleArray}`); // JS is dynamic
// Careful when working with data, Please make the data type align all of the array

const result = sampleArray.findIndex((e) => e === 5);
console.log(`result: ${result}`);

console.log('====================================');

// String
const text = 'Hello world';
console.log(`First Index: ${text[0]}`);
console.log(`Length: ${text.length}`);
console.log(`LowerCase: ${text.toLowerCase()}`);
console.log(`UpperCase: ${text.toUpperCase()}`);
const splitResult1 = text.split(' ');
console.log(splitResult1);
// Trim => Filter some over spaces
const sampleText = '  Hi, There.    ';
console.log(sampleText);
console.log(sampleText.trim());
console.log('====================================');

// Object (JSON - JavaScript Object Notation)
const ball = {
  id: 1,
  name: 'Ball',
  description: 'Round shape',
};
console.log(`Name: ${ball.name}`);
console.log(`Name: ${ball['name']}`);
console.log(Object.keys(ball));
console.log(Object.values(ball));
console.log(Object.entries(ball));
console.log('=== JSON Playground ===');
const jsonString = JSON.stringify(ball);
console.log({
  jsonString,
});
const jsonObject = JSON.parse(jsonString);
console.log({
  jsonObject,
});
console.log('====================================');

// Map => HashTable
// Use-case => Fast access data by key (Fast? O(1))
const hashTable = new Map();
const employeeList = [
  { name: 'James', dep: 'Finance' },
  { name: 'Peter', dep: 'Accountant' },
  { name: 'Kola', dep: 'Accountant' },
];
// Quick Quiz - Filter Employees
for (const emp of employeeList) {
  // If Already exists key -> Insert to array
  // Else -> Initial array
  if (hashTable.has(emp.dep)) {
    hashTable.get(emp.dep).push(emp.name);
  } else {
    hashTable.set(emp.dep, [emp.name]);
  }
}
console.log(hashTable);
console.log('====================================');

// Set => Math
// Benefit => Fast check exists (Fast? O(1)), prevent-duplicate
const sets = new Set();
const numbers = [1, 2, 1, 2, 3, 4, 5, 7, 4, 2, 3];
for (const n of numbers) {
  sets.add(n);
}
console.log(sets);
console.log(`Has ${2}: ${sets.has(2)}`);
console.log('====================================');

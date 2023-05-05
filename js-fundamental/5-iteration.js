// for/while/do-while

const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// For - execute with know amout of loops
console.log('=== Normal For Loop ===');
// i < sampleArray.length => not doing on i === 9
for (let i = 0; i < 2 && i < sampleArray.length; i++) {
  const element = sampleArray[i];
  console.log(element);
}
console.log('=== For-of ===');
for (const element of sampleArray) {
  console.log(element);
}

let i = 0;
// While - execute with unknown amount of loops (able to written with known amount)
// ! Need to specify with update change condition
console.log('=== While Loop ===');

while (i < sampleArray.length) {
  const element = sampleArray[i];
  console.log(element);
  i++; // Update condition
}

// Do-While - execute with unknown amount of loops but do first then check condition (Repeat-Until)
console.log('=== Do-While Loop ===');
// i === 9
do {
  i--;
  const element = sampleArray[i];
  console.log(element);
} while (i > 0);
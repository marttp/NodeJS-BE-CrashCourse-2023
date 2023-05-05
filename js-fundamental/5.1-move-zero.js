const input = [3,4,0,6,4,3,0,6,0,4,6];
// expected = [3,4,6,4,3,6,4,6,0,0,0]

let readIndex = 0;
let writeIndex = 0;

while (readIndex < input.length) {
  const current = input[readIndex];
  if (current !== 0) {
    input[writeIndex] = current;
    writeIndex++;
  }
  readIndex++;
}

while (writeIndex < input.length) {
  input[writeIndex] = 0;
  writeIndex++;
}

console.log(`Result: ${input}`);

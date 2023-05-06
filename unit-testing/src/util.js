export function sum(...nums) {
  if (!nums.length) {
    return 0;
  }
  return nums.reduce((prev, current) => (prev += current), 0);
}

export function moveZero(arrInteger) {
  if (!arrInteger) {
    throw Error('Need Array of Integer');
  }
  // [0,4,5,6,0,3,0,3]
  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < arrInteger.length) {
    if (arrInteger[readIndex] !== 0) {
      arrInteger[writeIndex++] = arrInteger[readIndex];
    }
    readIndex++;
  }

  while (writeIndex < arrInteger.length) {
    arrInteger[writeIndex++] = 0;
  }

  return arrInteger;
}

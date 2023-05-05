// const utility = require('./utility');
// utility.GRAVITY
// utility.getRandomNumber(100)
const { getRandomNumber } = require('./utility');
const { add, subtract, multiply, divide } = require('./calculator');

function main() {
  console.log('Get Random number');
  console.log(`Number: ${getRandomNumber(1000)}`);

  console.log('Example Calculator');
  console.log(`Add: ${add(10,20)}`);
  console.log(`Subtract: ${subtract(10,20)}`);
  console.log(`Multiply: ${multiply(10,20)}`);
  try {
    console.log(`Divide: ${divide(20,10)}`);
    console.log(`Divide: ${divide(20,0)}`);
  } catch (error) {
    console.log(error);
  }
}

main();

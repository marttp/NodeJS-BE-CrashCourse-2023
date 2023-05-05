// Function
// Benefit - Reuse block of code to be using in the future
// 1. Function Declaration
// 2. Function Expression =

// Function Declaration
function helloWorld() {
  console.log('Hello World');
}

function functionWithParameters(name, skills, role) {
  // <= Parameters

  const character = {
    name,
    skills,
    role,
  };
  return character;
}

// Function Expression
const helloExpression = function (by) {
  console.log(`Hello Expression by ${by}`);
};

// Arrow Function
const combinedString = (text1, text2) => {
  return `${text1}:${text2}`;
};
const arrowShortForm = (text1, text2) => `${text1}:${text2}`;
// combinedString === arrowShortForm

function main() {
  helloWorld();
  const character1 = functionWithParameters(
    'Mart',
    ['Programming', 'Monitoring'],
    'Backend'
  ); // <= Arguments
  const character2 = functionWithParameters(
    'Mart2',
    ['Programming', 'Monitoring', 'Deployment'],
    'Backend'
  ); // <= Arguments
  console.log(character1);
  console.log(character2);
  console.log('====================================');
  helloExpression('AAAAA');
  helloExpression();
  console.log(combinedString('TEST', 'PROGRAM'));
}


// main();
(() => {
  main();
})();
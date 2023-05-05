// Subject: Math
let myScore = 92; // 82 is not top 10%
const PASS_SCORE = 70;
const MAX_SCORE = 100;

if (myScore >= PASS_SCORE) {
  console.log('You passed!');
} else {
  console.log('You failed 🥲');
}

console.log(`Top: ${MAX_SCORE * 0.9}`);
if (myScore > MAX_SCORE * 0.9) {
  console.log('You are top 10%');
}

console.log('========');

const points = 102;
if (points >= 80 && points <= 100) {
  console.log('You got A!');
} else if (points >= 70 && points < 80) {
  console.log('You got B!');
} else if (points >= 60 && points < 70) {
  console.log('You got C!');
} else if (points >= 50 && points < 60) {
  console.log('You got D!');
} else if (points >= 0 && points < 50) {
  console.log('You got F!');
} else {
  console.log('Unacceptable!');
}

console.log('========');

let month = 'May';
let season = '';
switch (month) {
    case 'November':
    case 'December':
    case 'January':
    case 'February':
        season = 'Winter'
        break;
    case 'March':
    case 'April':
    case 'May':
    case 'June':
        season = 'Summer'
        break;
    case 'July':
    case 'August':
    case 'September':
    case 'October':
        season = 'Rainy'
        break;
}

console.log(`Season: ${season}`);

console.log('========');

let speed = 0;
let vehicle = 'train'; // car, train, plane, default: walk

switch(vehicle) {
    case 'car':
        speed = 10;
        break;
    case 'train':
        speed = 25;
        break;
    case 'plane':
        speed = 50;
        break;
    default:
        speed = 1;
        break;
}
console.log(`Your speed: ${speed}`);
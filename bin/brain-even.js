#!/usr/bin/env node
import promptly from 'promptly';
import name from '../src/cli.js';
// import userName from './brain-games.js'
console.log('Welcome to the Brain Games!');
let userName = await name()
console.log('Answer "yes" if the number is even, otherwise answer "no".');


let makeRandom = () => Math.round(Math.random() * (100 - 1) + 1); // make random number


let checkNumber = n => n % 2 === 0 ? 'yes' : 'no'; // is a number even?

const validator = (value) => value === 'yes' ? 'yes' : 'no'


async function askUser(n) {
  console.log(`Question: ${n}`)
  const isPrime = await promptly.prompt(`Your answer: `, [validator]);
  return isPrime; 
};

for (let i = 1; i <= 3; i += 1) {
  let randomNumber = makeRandom();
  let answer = await askUser(randomNumber);
  let correctAnswer = checkNumber(randomNumber);

  if (answer === correctAnswer) {
    i !== 3 ? console.log('Correct') : console.log(`Correct \nCongratulations, ${userName}!`)
  }else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again ${userName}`)
    // console.log(`Let's try again`)
    break;
 }
};

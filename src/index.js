import readlineSync from 'readline-sync';

import userName from '../bin/brain-games.js';

export const makeRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const askUser = (expression) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const logic = (text, expression, correctAnswer) => {
  console.log(text);
  let wrongAnswer = '';
  for (let i = 0; i <= 2; i += 1) {
    const userAnswer = askUser(expression[i]);
    if (userAnswer === String(correctAnswer[i])) {
      if (i < 2) {
        console.log('Correct!');
      } else {
        console.log(`Correct \nCongratulations, ${userName}!`);
      }
    } else {
      wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer[i]}.\nLet's try again ${userName}`;
      break;
    }
  }
  return console.log(wrongAnswer);
};

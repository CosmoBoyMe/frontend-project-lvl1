import readlineSync from 'readline-sync';
import askUserName from './cli.js';

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const askUser = (expression) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const runGame = (gameSetting) => {
  const [text, expression, correctAnswer] = Object.values(gameSetting);
  const userName = askUserName();
  console.log(text);
  let wrongAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const currentExpression = expression[i];
    const currentAnswer = correctAnswer[i];
    const userAnswer = askUser(currentExpression);
    if (userAnswer === String(currentAnswer)) {
      if (i < 2) {
        console.log('Correct!');
      } else {
        console.log(`Correct \nCongratulations, ${userName}!`);
      }
    } else {
      wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${currentAnswer}.\nLet's try again ${userName}`;
      break;
    }
  }
  return console.log(wrongAnswer);
};
export { getRandomNumber, runGame };

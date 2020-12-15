import readlineSync from 'readline-sync';
import askUserName from './cli.js';
import getRandomNumber from './methods.js';

const askUser = (task) => {
  console.log(`Question: ${task}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const userName = askUserName();

const GAME_ROUND = 3;

const runGame = (gameSetting, text) => {
  console.log(text);

  for (let i = 0; i < GAME_ROUND; i += 1) {
    const [question, correctAnswer] = gameSetting();
    const userAnswer = askUser(question);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { getRandomNumber, runGame };

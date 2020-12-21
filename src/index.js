import readlineSync from 'readline-sync';
import askUserName from './cli.js';

const MAX_GAME_ROUND = 3;

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const runGame = (gameSetting, text) => {
  const userName = askUserName();
  console.log(text);

  for (let i = 0; i < MAX_GAME_ROUND; i += 1) {
    const [question, correctAnswer] = gameSetting();
    const userAnswer = getUserAnswer(question);
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

export default runGame;

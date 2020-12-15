import { runGame } from '../index.js';
import getRandomNumber from '../methods.js';

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => (n % 2 === 0); // is a number even?

const MAX_RANDOM_NUMBER = 100;

const getGameSetting = () => {
  const randomNumber = getRandomNumber(1, MAX_RANDOM_NUMBER);

  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => runGame(getGameSetting, text);

export default startGame;

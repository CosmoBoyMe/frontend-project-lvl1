import { runGame } from '../index.js';
import getRandomNumber from '../methods.js';

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => (n % 2 === 0); // is a number even?

const maxRandomNumber = 100;

const getGameSetting = () => {
  const randomNumber = getRandomNumber(1, maxRandomNumber);
  const expression = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [expression, correctAnswer];
};

const startGame = () => runGame(getGameSetting, text);

export default startGame;

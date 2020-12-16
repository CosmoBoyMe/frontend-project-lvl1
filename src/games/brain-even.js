import runGame from '../index.js';
import getRandomNumber from '../utilit.js';

const TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const isEven = (n) => (n % 2 === 0);

const getGameSetting = () => {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => runGame(getGameSetting, TEXT);

export default startGame;

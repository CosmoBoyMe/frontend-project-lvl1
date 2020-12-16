import runGame from '../index.js';
import getRandomNumber from '../utilit.js';

const TEXT = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number >= 2;
};

const getGameSetting = () => {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => runGame(getGameSetting, TEXT);

export default startGame;

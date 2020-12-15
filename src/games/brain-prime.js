import { runGame } from '../index.js';
import getRandomNumber from '../methods.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return true;
    }
  }
  return number < 2;
};

const MAX_RANDOM_NUMBER = 100;

const getGameSetting = () => {
  const randomNumber = getRandomNumber(1, MAX_RANDOM_NUMBER);

  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'no' : 'yes';

  return [question, correctAnswer];
};

const startGame = () => runGame(getGameSetting, text);

export default startGame;

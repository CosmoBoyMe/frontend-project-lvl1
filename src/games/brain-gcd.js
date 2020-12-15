import { runGame } from '../index.js';
import getRandomNumber from '../methods.js';

const text = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  let divisor = 1;
  for (let i = 1; i <= firstNumber; i += 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      divisor = i;
    }
  }
  return divisor;
};

const MAX_RANDOM_NUMBER = 10;

const getGameSetting = () => {
  const firstNumber = getRandomNumber(1, MAX_RANDOM_NUMBER);
  const secondNumber = getRandomNumber(1, MAX_RANDOM_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGCD(firstNumber, secondNumber));

  return [question, correctAnswer];
};
const startGame = () => runGame(getGameSetting, text);

export default startGame;

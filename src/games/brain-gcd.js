import runGame from '../index.js';
import getRandomNumber from '../utilit.js';

const TEXT = 'Find the greatest common divisor of given numbers.';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;

const getGCD = (firstNumber, secondNumber) => {
  let divisor = 1;
  for (let i = 2; i <= firstNumber; i += 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      divisor = i;
    }
  }
  return divisor;
};

const getGameSetting = () => {
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const secondNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);

  return [question, String(correctAnswer)];
};
const startGame = () => runGame(getGameSetting, TEXT);

export default startGame;

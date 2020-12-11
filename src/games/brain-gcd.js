import { runGame } from '../index.js';
import getRandomNumber from '../methods.js';

const text = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  let result = 1;
  for (let denom = 1; denom <= firstNumber; denom += 1) {
    if ((firstNumber % denom === 0) && (secondNumber % denom === 0)) {
      result = denom;
    }
  }
  return result;
};

const getGameSetting = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const expression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);

  return [expression, String(correctAnswer)];
};
const startGame = () => runGame(getGameSetting, text);

export default startGame;

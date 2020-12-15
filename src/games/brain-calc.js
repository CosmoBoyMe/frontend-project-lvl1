import { runGame } from '../index.js';
import getRandomNumber from '../methods.js';

const text = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const getCorrectAnswer = (firstNumber, secondNumber, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'errors operator';
  }
};

const MAX_RANDOM_NUMBER = 10;

const getGameSetting = () => {
  const firstNumber = getRandomNumber(1, MAX_RANDOM_NUMBER);
  const secondNumber = getRandomNumber(1, MAX_RANDOM_NUMBER);
  const randomOperator = getRandomOperator();

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber, randomOperator);

  return [question, String(correctAnswer)];
};

const startGame = () => runGame(getGameSetting, text);

export default startGame;

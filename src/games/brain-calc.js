import runGame from '../index.js';
import getRandomNumber from '../random-number.js';

const TEXT = 'What is the result of the expression?';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;

const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`operator (${operator}) not supported`);
  }
};

const getGameSetting = () => {
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const secondNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber, operator);

  return [question, String(correctAnswer)];
};

const startGame = () => runGame(getGameSetting, TEXT);

export default startGame;

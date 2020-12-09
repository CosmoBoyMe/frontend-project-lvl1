import { getRandomNumber } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, 2)];
};

const getGameSetting = () => {
  const text = 'What is the result of the expression?';
  const mathExpressions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    switch (operator) {
      case '+':
        correctAnswers.push(firstNumber + secondNumber);
        mathExpressions.push(`${firstNumber} + ${secondNumber}`);
        break;
      case '-':
        correctAnswers.push(firstNumber - secondNumber);
        mathExpressions.push(`${firstNumber} - ${secondNumber}`);
        break;
      case '*':
        correctAnswers.push(firstNumber * secondNumber);
        mathExpressions.push(`${firstNumber} * ${secondNumber}`);
        break;
      default:
        console.log('errors operator');
    }
  }
  return { text, mathExpressions, correctAnswers };
};
export default getGameSetting;

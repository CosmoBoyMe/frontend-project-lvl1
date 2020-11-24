#!/usr/bin/env node

import { makeRandomNumber, logic } from '../src/index.js';

const makeRandomOperator = () => {
  const operator = ['+', '-', '*'];
  return operator[makeRandomNumber(0, 2)];
};

const text = 'What is the result of the expression?';
const mathExpression = [];
const correctAnswer = [];

for (let i = 1; i <= 3; i += 1) {
  const firstNumber = makeRandomNumber(1, 10);
  const secondNumber = makeRandomNumber(1, 10);
  const operator = makeRandomOperator();
  switch (operator) {
    case '+':
      correctAnswer.push(firstNumber + secondNumber);
      mathExpression.push(`${firstNumber} + ${secondNumber}`);
      break;
    case '-':
      correctAnswer.push(firstNumber - secondNumber);
      mathExpression.push(`${firstNumber} - ${secondNumber}`);
      break;
    case '*':
      correctAnswer.push(firstNumber * secondNumber);
      mathExpression.push(`${firstNumber} * ${secondNumber}`);
      break;

      // no default
  }
}

logic(text, mathExpression, correctAnswer);

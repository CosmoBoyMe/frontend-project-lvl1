#!/usr/bin/env node

import { logic, makeRandomNumber } from '../src/index.js';

const text = 'Find the greatest common divisor of given numbers.';

const expression = [];
const correctAnswer = [];

for (let i = 0; i <= 2; i += 1) {
  const firstNumber = makeRandomNumber(1, 10);
  const secondNumber = makeRandomNumber(1, 10);
  expression.push(`${firstNumber} ${secondNumber}`);
  for (let n = 1; n <= firstNumber; n += 1) {
    if ((firstNumber % n === 0) && (secondNumber % n === 0)) {
      correctAnswer[i] = n;
    }
  }
}

logic(text, expression, correctAnswer);

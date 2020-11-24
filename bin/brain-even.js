#!/usr/bin/env node
import { logic, makeRandomNumber } from '../src/index.js';

const checkNumber = (n) => (n % 2 === 0 ? 'yes' : 'no'); // is a number even?
const text = 'Answer "yes" if the number is even, otherwise answer "no".';
const expression = [];
const correctAnswer = [];

for (let i = 0; i <= 2; i += 1) {
  const randomNumber = makeRandomNumber(1, 100);
  expression.push(randomNumber);
  correctAnswer.push(checkNumber(expression[i]));
}
logic(text, expression, correctAnswer);

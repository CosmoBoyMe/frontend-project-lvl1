#!/usr/bin/env node

import { getRandomNumber, runGame } from '../src/index.js';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no'); // is a number even?
const getGameSetting = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expressions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    expressions.push(randomNumber);
    correctAnswers.push(isEven(expressions[i]));
  }
  return { text, expressions, correctAnswers };
};
runGame(getGameSetting());

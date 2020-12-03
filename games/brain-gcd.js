#!/usr/bin/env node

import { runGame, getRandomNumber } from '../src/index.js';

const getGameSetting = () => {
  const text = 'Find the greatest common divisor of given numbers.';
  const expressions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    expressions.push(`${firstNumber} ${secondNumber}`);
    for (let denom = 1; denom <= firstNumber; denom += 1) {
      if ((firstNumber % denom === 0) && (secondNumber % denom === 0)) {
        correctAnswers[i] = denom;
      }
    }
  }
  return { text, expressions, correctAnswers };
};

runGame(getGameSetting());

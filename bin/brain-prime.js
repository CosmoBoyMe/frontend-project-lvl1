#!/usr/bin/env node

import { getRandomNumber, runGame } from '../src/index.js';

const isPrime = (number) => {
  for (let denom = 2; denom < number; denom += 1) {
    if (number % denom === 0) {
      return 'no';
    }
  }
  return number < 2 ? 'no' : 'yes';
};
const getGameSetting = () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeNumbers = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    primeNumbers.push(randomNumber);
    correctAnswers.push(isPrime(randomNumber));
  }
  return { text, primeNumbers, correctAnswers };
};

runGame(getGameSetting());

#!/usr/bin/env node

import { makeRandomNumber, logic } from '../src/index.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumbers = [];
const correctAnswer = [];
const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return n < 2 ? 'no' : 'yes';
};

for (let i = 0; i <= 2; i += 1) {
  const primeNumber = makeRandomNumber(1, 100);
  primeNumbers.push(primeNumber);
  correctAnswer.push(isPrime(primeNumber));
}

logic(text, primeNumbers, correctAnswer);

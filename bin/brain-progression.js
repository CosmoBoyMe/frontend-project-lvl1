#!/usr/bin/env node

import { makeRandomNumber, logic } from '../src/index.js';

const text = 'What number is missing in the progression?';
const progression = [];
const correctAnswer = [];

for (let i = 0; i <= 2; i += 1) {
  const lenghtProgression = makeRandomNumber(5, 10);
  const firstNumberProgression = makeRandomNumber(1, 10);
  const stepProgression = makeRandomNumber(1, 10);
  const removeRandomStep = makeRandomNumber(1, lenghtProgression);
  const actualProgression = [];
  let actualStep = firstNumberProgression;
  for (let n = 0; n <= lenghtProgression; n += 1) {
    actualStep += stepProgression;
    if (n === removeRandomStep) {
      correctAnswer.push(actualStep);
      actualProgression[n] = '..';
    } else {
      actualProgression.push(actualStep);
    }
  }
  progression.push(actualProgression.join(' '));
}

logic(text, progression, correctAnswer);

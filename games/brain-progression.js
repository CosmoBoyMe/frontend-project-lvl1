#!/usr/bin/env node

import { getRandomNumber, runGame } from '../src/index.js';

const getGameSetting = () => {
  const text = 'What number is missing in the progression?';
  const progressions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const lengthProgression = getRandomNumber(5, 10);
    const firstNumberProgression = getRandomNumber(1, 10);
    const stepProgression = getRandomNumber(1, 10);
    const randomStep = getRandomNumber(1, lengthProgression);
    const currentProgression = [];
    let currentStep = firstNumberProgression;
    for (let num = 0; num <= lengthProgression; num += 1) {
      currentStep += stepProgression;
      if (num === randomStep) {
        correctAnswers.push(currentStep);
        currentProgression[num] = '..';
      } else {
        currentProgression.push(currentStep);
      }
    }
    progressions.push(currentProgression.join(' '));
  }
  return { text, progressions, correctAnswers };
};

runGame(getGameSetting());

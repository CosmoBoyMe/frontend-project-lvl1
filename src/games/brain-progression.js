import { runGame } from '../index.js';
import getRandomNumber from '../methods.js';

const text = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(firstNumber + i * step);
  }
  return result;
};

const MAX_RANDOM_NUMBER = 10;

const getGameSetting = () => {
  const length = getRandomNumber(5, 10);
  const firstNumber = getRandomNumber(1, MAX_RANDOM_NUMBER);
  const step = getRandomNumber(1, MAX_RANDOM_NUMBER);
  const randomIndex = getRandomNumber(1, length);

  const progression = getProgression(firstNumber, step, length);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression.join(' '), String(correctAnswer)];
};

const startGame = () => runGame(getGameSetting, text);

export default startGame;

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

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;

const getGameSetting = () => {
  const length = getRandomNumber(5, 10);
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const step = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const randomIndex = getRandomNumber(1, length);

  const progression = getProgression(firstNumber, step, length);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => runGame(getGameSetting, text);

export default startGame;

import runGame from '../index.js';
import getRandomNumber from '../utilit.js';

const TEXT = 'What number is missing in the progression?';
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
const MIN_LENGTH = 5;
const MAX_LENGHT = 10;

const getProgression = (firstNumber, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(firstNumber + i * step);
  }

  return result;
};

const getGameSetting = () => {
  const length = getRandomNumber(MIN_LENGTH, MAX_LENGHT);
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const step = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const index = getRandomNumber(MIN_RANDOM_NUMBER, length);

  const progression = getProgression(firstNumber, step, length);

  const correctAnswer = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const startGame = () => runGame(getGameSetting, TEXT);

export default startGame;

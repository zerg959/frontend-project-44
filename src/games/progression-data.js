import range from 'lodash/range.js';
import { randomInt } from '../functions.js';

const progressionTask = 'What number is missing in the progression?';

const progressionGame = () => {
  const progressionStep = randomInt(1, 15);
  const progressionLen = randomInt(5, 15);
  const progressionStart = randomInt(1, 50)
  let progression = range(progressionStart, 1001, progressionStep);
  let newProgr = progression.slice(0, progressionLen);
  let estimatedAnsw = newProgr.splice(randomInt(1,progressionLen - 1), 1, '..');
  const expression = newProgr.join(' ');
  return [expression, String(estimatedAnsw)];
};

export { progressionGame, progressionTask };

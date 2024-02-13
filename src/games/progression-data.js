import { randomInt } from "../functions.js";

import range from 'lodash/range.js';

const progressionTask = 'What number is missing in the progression?';

const progressionGame = () => {
  let progressionStep = randomInt(1, 15);
  let progressionLen = randomInt(5, 15)
  let progressionStart = randomInt(1, 50)
  let progression = range(progressionStart,1001,progressionStep);
  let newProgr = progression.slice(0,progressionLen);
  let estimatedAnsw = newProgr.splice(randomInt(1,progressionLen-1),1,'...');
  let x = newProgr.join(' ');
  return [x, String(estimatedAnsw)];
}

export { progressionGame, progressionTask };
import { randomInt } from '../functions.js';

const maxNum = 50;
const minNum = 1;

const evenTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenCheck = (num) => num % 2 === 0;

const evenGame = () => {
  const questIsEven = randomInt(minNum, maxNum);
  let answerIsEven;
  if (evenCheck(questIsEven)) {
    answerIsEven = 'yes';
  } else {
    answerIsEven = 'no';
  }
  return [questIsEven, answerIsEven];
};

export { evenTask, evenCheck, evenGame };

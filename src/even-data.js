import { randomInt } from "./functions.js";

const evenTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenCheck = (num) => {
  return num % 2 === 0;
};

const evenGame = () => {
  let questIsEven = randomInt(1,101);
  let answerIsEven;
  if (evenCheck(questIsEven)) {
    answerIsEven = 'yes';
  } else {
    answerIsEven = 'no';
  }
  return [questIsEven, answerIsEven];
}

export { evenTask, evenCheck, evenGame}
// let n = randomInt(1,101);
// let questIsEven = randomInt(1,101);
// let answerIsEven = even(questIsEven);
// console.log(evenGame());
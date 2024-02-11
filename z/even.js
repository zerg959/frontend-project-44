import { randomInt } from "../dialogues/functions.js";

const even = (num) => {
  return num % 2 === 0;
};

const evenGame = () => {
  let questIsEven = randomInt(1,101);
  let answerIsEven;
  if (even(questIsEven)) {
    answerIsEven = 'yes';
  } else {
    answerIsEven = 'no';
  }
  return [questIsEven, answerIsEven];
}

// let n = randomInt(1,101);
// let questIsEven = randomInt(1,101);
// let answerIsEven = even(questIsEven);
console.log(evenGame());
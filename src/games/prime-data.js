import { randomInt } from '../functions.js'
import range from 'lodash.range';

const primeTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeCheck = (num) => {
  let primeCounter = 0;
  for (let i in range(1, num + 1)) {
  if (num % (Number(i)+1) === 0) {
      primeCounter += 1
    } 
  }
  return primeCounter > 2;
};

const primeGame = () => {
  let questIsPrime = randomInt(1,101);
  let answerIsPrime;
  if (primeCheck(questIsPrime)) {
    answerIsPrime = 'no';
  } else {
    answerIsPrime = 'yes';
  }
  return [questIsPrime, answerIsPrime];
}

export { primeGame, primeTask };

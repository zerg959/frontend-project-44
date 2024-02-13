#!/usr/bin/env node
import { 
  myHeroName, 
  greets, 
  answerInput 
} from "../src/functions.js";
// import range from "lodash.range";

const attempts = 3;

const gameGenerator = (game, task) => {
  let corrAnswr;
  let wrongAnswr;
  greets();
  task;
  console.log(task);
  // for (let i in range(attempts)) {
  for (let i = 0; i < attempts; i++) {
    const [inputTask, estimatedAnsw] = game();
    console.log(`Question: ${inputTask}`);
    const answr = answerInput();
    if (answr === estimatedAnsw) {
      console.log('Correct!');
      i = Number(i) + 1;
      if (i === attempts) {
        console.log(`Congratulations, ${myHeroName}!`);
      }
    }
    if (answr !== estimatedAnsw) {
      corrAnswr = estimatedAnsw;
      wrongAnswr = answr;
      console.log(`"${wrongAnswr}" is wrong answer ;(. Correct answer was "${corrAnswr}".`);
      console.log(`Let's try again, ${myHeroName}!`);
      break;
    }
  }
};

export { gameGenerator };

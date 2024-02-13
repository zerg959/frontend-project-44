#!/usr/bin/env node
import { 
  myHeroName, 
  greets, 
  answerInput 
} from "../src/functions.js";

const attempts = 3;
let counter = 0;

const gameGenerator = (game, task) => {
  let corrAnswr;
  let wrongAnswr;
  greets();
  task;
  console.log(task);
  while (counter != attempts) {
    const [inputTask, estimatedAnsw] = game();
    console.log(`Question: ${inputTask}`);
    let answr = answerInput();
    if (answr === estimatedAnsw) {
      console.log('Correct!')
      counter += 1;
    } else {
      corrAnswr = estimatedAnsw;
      wrongAnswr = answr;  
      console.log(`"${wrongAnswr}" is wrong answer ;(. Correct answer was "${corrAnswr}".`);
      counter = 0;
    }
  }
  console.log(`Congrtulations, ${myHeroName}!`);
};

export { gameGenerator };

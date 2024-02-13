#!/usr/bin/env node
import { 
  myHeroName, 
  greets, 
  answerInput 
  import range from "lodash.range";

  const attempts = 3;
  // let counter = 0;
  
  const gameGenerator = (game, task) => {
    let corrAnswr;
    let wrongAnswr;
    greets();
    task;
    console.log(task);
    for (let i in range(attempts)) {
      const [inputTask, estimatedAnsw] = game();
      console.log(`Question: ${inputTask}`);
      let answr = answerInput();
      if (answr === estimatedAnsw) {
        console.log('Correct!')
        i = Number(i) + 1;
        if (i === 3) {
          console.log(`Congrtulations, ${myHeroName}!`);
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

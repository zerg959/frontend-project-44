#!/usr/bin/env node

import { startMessage, greets, congrats, myHeroName} from "../dialogues/functions.js";
import { checkAnswer} from "../dialogues/brain-calc-task-description.js";
const attempts = 3;
const message ='What is the result of the expression?'


const brainCalc= () =>{
  greets();
  startMessage(message);
  checkAnswer(attempts);
  congrats(myHeroName);
};

export { brainCalc };
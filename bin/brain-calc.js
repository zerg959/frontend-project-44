import { greets, congrats, myHeroName } from "../dialogues/heros-name.js";
import { startMessage} from "../dialogues/brain-even-task-description.js";
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
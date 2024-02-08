import { greets, congrats, myHeroName } from "../dialogues/heros-name.js";
import { checkAnswer, startMessage } from "../dialogues/brain-even-task-description.js";
const attempts = 3;
const answer1 = 'yes';
const answer2 = 'no';
const message ='Answer "yes" if the number is even, otherwise answer "no".'


const brainEven = () =>{
  greets();
  startMessage(message);
  checkAnswer(attempts, answer1, answer2);
  congrats(myHeroName);
};
export { brainEven };
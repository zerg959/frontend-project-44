import { greets, congrats, myHeroName } from "../dialogues/heros-name.js";
import { checkAnswer, attempts, answer1, answer2, startMessage} from "../dialogues/brain-even-task-description.js";

greets();
startMessage()
checkAnswer(attempts, answer1, answer2);
congrats(myHeroName);

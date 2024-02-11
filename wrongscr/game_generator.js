import { evenTask, evenGame } from "./even-data.js";
import { startMessage, randomInt, myHeroName, greets, answerInput } from "../src/games/functions.js";

const attempts = 3;
let counter = 0;

const gameGenerator = () => {
  let corrAnswr;
  let wrongAnswr;
  greets();
  startMessage();
  console.log(evenTask);
  while (counter != attempts) {
    const [evnTask, estimatedAnsw] = evenGame();
    console.log(`Question: ${evnTask}`);
    let answr = answerInput();
    if (answr === estimatedAnsw) {
      console.log('Correct!')
      counter += 1;
    } else {
    corrAnswr = estimatedAnsw;
    wrongAnswr = answr;  
    console.log(`"${wrongAnswr}" is wrong answer ;(. Correct answer was "${corrAnswr}".`);
    counter = 0;}
  }
  console.log(`Congrtulations, ${myHeroName}!`)
}

gameGenerator();
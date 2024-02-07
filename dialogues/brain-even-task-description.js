import readlineSync from "readline-sync";
import { myHeroName } from "./heros-name.js";

const startMessage = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
let attempts = 3;
const answer1 = 'yes';
const answer2 = 'no';

const evenCondition = (number) => {
  return number % 2 === 0
}

const checkAnswer = (attempts, answer1, answ2) => {
  let counter = 0;
  while (counter != attempts) {
    let question = Math.floor(Math.random() * (11 - 1) )+ 1;
    let correctAnsw;
    let wrongAnsw;
    console.log(`Question: ${question}`);
    let yourAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (evenCondition(question)) {
      correctAnsw = answer1;
      wrongAnsw = answ2;
      if (yourAnswer === correctAnsw) {
        console.log('Correct!')
      counter += 1;
      } else {
      wrongAnsw = answ2;
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnsw}'`)
      console.log(`Lets's try again, ${myHeroName}`)
    counter = 0;}
    } else {
      correctAnsw = answ2;
      wrongAnsw = answer1;
      if (yourAnswer === correctAnsw) {
        console.log('Correct!')
      counter += 1;
      }
      else {
        wrongAnsw = answ2;
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnsw}'`);
        console.log(`Lets's try again, ${myHeroName}`);
      counter = 0;}
      }
    }
  
}
export { evenCondition, checkAnswer, answer1, answer2, attempts, startMessage };

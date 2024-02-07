// import readlineSync from "readline-sync";
// const description = () => {
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
// };
import { greets, myHeroName } from "../dialogues/heros-name.js";
import readlineSync from "readline-sync";

let counter = 0;

let randNum = Math.floor(Math.random() * (11 - 1) )+ 1;
let evenCondition = (number) => {
  return number % 2 === 0
}
// let number = 
const checkAnswer = (quest, answer1, answ2) => {
  let question = quest;
  let correctAnsw;
  let wrongAnsw;
  console.log(`Question: ${question}`);
// let randNum = Math.floor(Math.random() * (11 - 1) )+ 1;
  let yourAnswer = readlineSync.question('Answer: ').toLowerCase();
  if (evenCondition(question)) {
    correctAnsw = answer1;
    wrongAnsw = answ2;
    if (yourAnswer === correctAnsw) {
      console.log('Correct!')
      counter += 1;
    } else {
    wrongAnsw = answ2;
    console.log(`"'${yourAnswer}' is wrong answer ;(. Correct answer was ${correctAnsw}"`)
    console.log(`"Lets's try again, ${myHeroName}"`)
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
      console.log(`"'${yourAnswer}' is wrong answer ;(. Correct answer was ${correctAnsw}"`)
      console.log(`"Lets's try again, ${myHeroName}"`)
      counter = 0;}
    }
  }
checkAnswer(randNum,'yes', 'no')

// export { description };

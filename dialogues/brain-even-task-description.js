import readlineSync from "readline-sync";
import { myHeroName } from "../src/functions.js";

const max = 10;
const min = 1;

const questFunc = (max, min) => {
  return Math.floor(Math.random() * (max - min) )+ min;
};

const conditionFunc = (dataIn) => {
  return dataIn % 2 === 0;
};

const checkAnswer = (attempts, answer1, answ2) => {
  let counter = 0;
  while (counter != attempts) {
    let question = questFunc(max, min);
    let correctAnsw;
    let wrongAnsw;
    console.log(`Question: ${question}`);
    let yourAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (conditionFunc(question)) {
      correctAnsw = answer1;
      wrongAnsw = answ2;
      if (yourAnswer === correctAnsw) {
        console.log('Correct!');
      counter += 1;
      } else {
      wrongAnsw = answ2;
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnsw}'`);
      console.log(`Lets's try again, ${myHeroName}`);
    counter = 0;}
    } else {
      correctAnsw = answ2;
      wrongAnsw = answer1;
      if (yourAnswer === correctAnsw) {
        console.log('Correct!');
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
export { conditionFunc, checkAnswer,questFunc };

import readlineSync from "readline-sync";
import { myHeroName } from "../src/functions.js";

// const startMessage = (message) => console.log(message);
const max = 10;
const min = 1;

const questFunc = (max, min) => {
  const operators = ['+',  '*'];
  let firstElem = Math.floor(Math.random() * (max - min)) + min;
  let secondElem = Math.floor(Math.random() * (max - min)) + min;
  let operIdx = Math.floor(Math.random() * (2 - 0)) + 0;
  return `${firstElem} ${operators[operIdx]} ${secondElem}`;
};

const checkAnswer = (attempts) => {
  let counter = 0;
  while (counter != attempts) {
    let question = questFunc(max, min);
    let correctAnsw = eval(question);
    let wrongAnsw;
    console.log(`Question: ${question}`);
    let yourAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (correctAnsw === Number(yourAnswer)) {
      console.log('Correct!');
      counter += 1;
      } else {
      wrongAnsw = yourAnswer;
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnsw}'`);
      console.log(`Lets's try again, ${myHeroName}`);
      counter = 0;}
    } 
  };

export { checkAnswer, startMessage, questFunc };

import readlineSync from "readline-sync";
import { myHeroName } from "./functions.js";

const questFunc = (max, min) => {
  let firstElem = Math.floor(Math.random() * (max - min)) + min;
  let secondElem = Math.floor(Math.random() * (max - min)) + min;
  return [firstElem, secondElem];
};

const corrAnsw = (num1, num2) => {
  const arr1 = [];
  const arr2 = [];
  while (const i=1,  )
}


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

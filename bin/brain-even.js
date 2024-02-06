import { greets, myHeroName } from "../dialogues/heros-name.js";
import { description} from "../dialogues/task-description.js";
import readlineSync from "readline-sync";


greets();

const question = (quest) => {
  console.log(`Question: ${quest}`);
  let answer = readlineSync.question('Answer: ');
  return answer;
} 

const checkAnswer = (result, corrAnsw) => {

}


const brainEven = () => {
  let counter = 0;
  let correctAnswer;
  let wrongAnswer;
  while (counter != 3) {
    let randNum = Math.floor(Math.random() * (11 - 1) )+ 1;
    let result = question(randNum).toLowerCase();
    if (randNum % 2 === 0) {
      correctAnswer = 'yes';
      wrongAnswer = 'no';
      if (result === correctAnswer ) {
        console.log('Correct!');
        counter += 1;
      }
      correctAnswer = 'no';
      wrongAnswer = 'yes';
      console.log(`${wrongAnswer} is wrong answer ;(. Correct answer was ${correctAnswer})`)
      counter = 0;
      console.log('Lets Try again')
    }
    
    counter = 0;
    console.log('Lets Try again')    
  }
}


// const brainEven = () => {
//   let counter = 0;
//   // let userAnswer = readlineSync.question('Answer: ')
//   while (counter != 3) {
//     // question(randNum)
//     let randNum = Math.floor(Math.random() * (10 - 0) )+ 0;
//     let answer = question(randNum)
//     if ((randNum % 2 === 0) && (userAnswer.toLocaleLowerCase() === 'yes')) {
//       console.log('Correct!');
//       counter += 1;
//       question(randNum, userAnswer);
//     }
//   }
// };
// question(randNum);
brainEven();

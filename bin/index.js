#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { answerInput } from '../src/functions.js';

const attempts = 3;

export default function gameGenerator(game, task) {
  let corrAnswr;
  let wrongAnswr;
  console.log('Welcome to the Brain Games!');
  const myHeroName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myHeroName}!`);
  console.log(task);
  for (let i = 0; i < attempts; i += 1) {
    const [inputTask, estimatedAnsw] = game();
    console.log(`Question: ${inputTask}`);
    const answr = answerInput();
    if (answr !== estimatedAnsw) {
      corrAnswr = estimatedAnsw;
      wrongAnswr = answr;
      console.log(`"${wrongAnswr}" is wrong answer ;(. Correct answer was "${corrAnswr}".`);
      console.log(`Let's try again, ${myHeroName}!`);
      break;
    }
    if (answr === estimatedAnsw) {
      console.log('Correct!');
    }
    
  }
  console.log(`Congratulations, ${myHeroName}!`);
}

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import range from 'lodash.range';
import { answerInput } from '../src/functions.js';

const attempts = 3;

export default function gameGenerator(game, task) {
  let corrAnswr;
  let wrongAnswr;
  console.log('Welcome to the Brain Games!');
  const myHeroName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myHeroName}!`);
  console.log(task);
  for (let i in range(attempts)) {
    const [inputTask, estimatedAnsw] = game();
    console.log(`Question: ${inputTask}`);
    const answr = answerInput();
    if (answr === estimatedAnsw) {
      console.log('Correct!');
      i = Number(i) + 1;
      if (i === attempts) {
        console.log(`Congratulations, ${myHeroName}!`);
      }
    }
    if (answr !== estimatedAnsw) {
      corrAnswr = estimatedAnsw;
      wrongAnswr = answr;
      console.log(`"${wrongAnswr}" is wrong answer ;(. Correct answer was "${corrAnswr}".`);
      console.log(`Let's try again, ${myHeroName}!`);
      break;
    }
  }
}

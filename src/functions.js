import readlineSync from 'readline-sync';

const myHeroName = '';
const randomInt = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const startMessage = (message) => message;
const answerInput = () => {
  const heroAnswer = readlineSync.question('Your answer: ');
  return heroAnswer;
};

const greets = () => {
  console.log('Welcome to the Brain Games!');
  const myHeroName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myHeroName}!`);
};

export { randomInt, startMessage, greets, answerInput, myHeroName };

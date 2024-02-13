import readlineSync from "readline-sync";

let myHeroName = '';
const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const startMessage = (message) => message;
const answerInput = () => {
  let heroAnswer = readlineSync.question('Your answer: ');
  return heroAnswer;
  };

const greets = () => {
  console.log('Welcome to the Brain Games!');
  myHeroName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myHeroName}!`);
};

const congrats = (heroName) => {
  console.log(`Congrtulations, ${heroName}!`);
}; 

export { randomInt, startMessage, greets, congrats, answerInput, myHeroName };

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

// const questFunc = (max, min) => {
//   const operators = ['+',  '*'];
//   let firstElem = Math.floor(Math.random() * (max - min)) + min;
//   let secondElem = Math.floor(Math.random() * (max - min)) + min;
//   let operIdx = Math.floor(Math.random() * (2 - 0)) + 0;
//   return `${firstElem} ${operators[operIdx]} ${secondElem}`;
// };

// const conditionFunc = (dataIn) => {
//   let calcData = dataIn.split(' ');
//   return calcData;
// };

const greets = () => {
  console.log('Welcome to the Brain Games!');
  myHeroName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myHeroName}!`);
};

const congrats = (heroName) => {
  console.log(`Congratulations, ${heroName}`)
}; 
export { randomInt }
export { startMessage, greets, congrats, answerInput, myHeroName };

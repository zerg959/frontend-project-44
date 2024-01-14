import readlineSync from "readline-sync";
let myHeroName = '';
const greets = () => {
  console.log('Welcome to the Brain Games!');
  myHeroName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myHeroName}!`);
};

export { greets, myHeroName };

import readlineSync from 'readline-sync';

export default function () {
  console.log('Welcome to the Brain Games!');
  const myName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myName}!`);
  return myName;
};

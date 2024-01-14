import readlineSync from "readline-sync";
const cli = () => {
  console.log('Welcome to the Brain Games!');
  const myName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${myName}!`);
  return myName;
};

export { cli };
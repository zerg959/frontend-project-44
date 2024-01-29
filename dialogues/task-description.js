import readlineSync from "readline-sync";
// let answer = '';
const heroAnswer = () => {
  let answer = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');
};

export { heroAnswer };
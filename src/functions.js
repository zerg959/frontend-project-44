import readlineSync from 'readline-sync';

const randomInt = (max, min) => Math.floor(Math.random() * (max - min)) + min;

const startMessage = (message) => message;
const answerInput = () => {
  const heroAnswer = readlineSync.question('Your answer: ');
  return heroAnswer;
};

export {
  randomInt,
  startMessage,
  answerInput,
};

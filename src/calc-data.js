import { randomInt } from "./functions.js";

const calcTask = 'What is the result of the expression?';

// const evenCheck = (num1, num2) => {
//   return num % 2 === 0;
// };

const calcGame = () => {
  let num1 = randomInt(1,11);
  let num2 = randomInt(1,11);
  const operators = ['+', '*'];
  let operator = operators[randomInt(0,operators.length)];
  let questExpression = `${num1} ${operator} ${num2}`;
  return [questExpression, String(eval(questExpression))];
};

export { calcTask, calcGame}

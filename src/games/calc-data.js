import { randomInt } from '../functions.js';

const calcTask = () => 'What is the result of the expression?';

const calcGame = () => {
  const num1 = randomInt(1, 11);
  const num2 = randomInt(1, 11);
  const operators = ['+', '*'];
  const operator = operators[randomInt(0, operators.length)];
  const questExpression = `${num1} ${operator} ${num2}`;
  return [questExpression, String(eval(questExpression))];
};

export { calcTask, calcGame };

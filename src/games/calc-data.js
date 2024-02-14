import { randomInt } from '../functions.js';

const calcTask = 'What is the result of the expression?';

const calcGame = () => {
  const num1 = randomInt(1, 11);
  const num2 = randomInt(1, 11);
  let answerCalc;
  const operators = ['+', '*'];
  const operator = operators[randomInt(0, operators.length)];
  if (operator === '+') {
    answerCalc = num1 + num2;
  }
  if (operator === '*') {
      answerCalc = num1 * num2;
  }
  const questExpression = `${num1} ${operator} ${num2}`;
  return [questExpression, String(answerCalc)];
};

export { calcTask, calcGame };

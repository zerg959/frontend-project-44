import { randomInt } from '../functions.js';

const calcTask = 'What is the result of the expression?';

const calcGame = () => {
  const num1 = randomInt(1, 11);
  const num2 = randomInt(1, 11);
  let answerCalc;
  const operators = ['+', '*'];
  const operator = operators[randomInt(0, operators.length)];
  switch (operator){
    case '+':
      answerCalc = num1 + num2;
      break;
    case '*':
      answerCalc = num1 * num2;
      break;
  }
  const questExpression = `${num1} ${operator} ${num2}`;
  return [questExpression, String(answerCalc)];
};

export { calcTask, calcGame };

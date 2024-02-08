import readlineSync from "readline-sync";

const startMessage = (message) => console.log(message);

const questFunc = (max, min) => {
  const operators = ['+',  '*'];
  let firstElem = Math.floor(Math.random() * (max - min)) + min;
  let secondElem = Math.floor(Math.random() * (max - min)) + min;
  let operIdx = Math.floor(Math.random() * (2 - 0)) + 0;
  return `${firstElem} ${operators[operIdx]} ${secondElem}`
};
const data = questFunc(11, 1);

const conditionFunc = (dataIn) => {
  let calcData = dataIn.split(' ')
  return calcData;
};

console.log(conditionFunc(data));

import { randomInt } from "./functions.js";

const maxnum = 50;
const minnum = 1;

const gcdTask = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  let num1 = randomInt(maxnum, minnum);
  let num2 = randomInt(maxnum, minnum);
  const divisors1 = [];
  const divisors2 = [];
  const gcdArr =[];
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0) {
      divisors1.push(i);
    }
  }
  for (let k = 1; k <= num2; k += 1) {
    if (num2 % k === 0) {
      divisors2.push(k);
      }
    }
  for (let d of divisors1) {
    if (divisors2.includes(d)) {
      gcdArr.push(d);
    }
  }
  let gcd = Math.max(...gcdArr);
  return [`${num1} ${num2}`, String(gcd)];
};

export { gcdGame, gcdTask };

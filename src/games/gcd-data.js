import { randomInt } from '../functions.js';

const maxNum = 50;
const minNum = 1;

const gcdTask = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const num1 = randomInt(maxNum, minNum);
  const num2 = randomInt(maxNum, minNum);
  const divisors1 = [];
  const divisors2 = [];
  const gcdArr = [];
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
  // divisors1.forEach((value, index, divisors2) => {
  //   if (divisors2.includes(value)) {
  //     gcdArr.push(value);
  //   }
  // })
  // for (const value of divisors1) {
  //   if (divisors2.includes(value)) {
  //     gcdArr.push(value);
  //   }
  // }
  let item;
  for (item of divisors1) {
    if (divisors2.includes(item)) {
      gcdArr.push(item);
  }
}
  const gcd = Math.max(...gcdArr);
  return [`${num1} ${num2}`, String(gcd)];
};
console.log(gcdGame());
export { gcdGame, gcdTask };

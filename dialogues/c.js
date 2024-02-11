const findGcd = (num1, num2) => {
  let a = num1; 3
  let b = num2; 17
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b; 
    a = temp;
  }
  console.log(temp);
};

findGcd(100, 25)
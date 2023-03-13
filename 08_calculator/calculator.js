const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayNum) {
	let sum = 0;
  arrayNum.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arrayNum) {
  let product = 1;
  for (let i = 0; i < arrayNum.length; i++) {
    product *= arrayNum[i];
  }
  return product;
};

const power = function(num1, num2) {
  if (num2 === 0) {
    return 1;
  }
  let power = num1;
	for (let i = 1; i < num2; i++) {
    power *= num1;
  }
  return power;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

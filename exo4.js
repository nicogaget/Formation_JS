let read = require("readline-sync");

let n1 = read.questionFloat("Nombre 1 ? ");
let n2 = read.questionFloat("Nombre 2 ? ");
let n3 = read.questionFloat("Nombre 3 ? ");

let lePlusGrand = (num1, num2, num3) => {
  let nbreMax;
  if (num1 > num2 && num1 > num3) {
    nbreMax = num1;
  } else if (num2 > num1 && num2 > num3) {
    nbreMax = num2;
  } else {
    nbreMax = num3;
  }
  return `Le plus grand est ${nbreMax}`;
};

console.log(lePlusGrand(n1, n2, n3));

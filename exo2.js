let read = require("readline-sync");

let num1 = read.questionFloat("Premier nombre ?");
let num2 = read.questionFloat("Deuxieme nombre ?");

let addition = (num1, num2) => {
  let somme = num2 + num1;
  return `La somme des deux nombres est : ${somme}`;
};

console.log(addition(num1, num2));

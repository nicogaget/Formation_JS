let read = require("readline-sync");

let op1 = read.questionFloat("Premier operande? ");
let operateur = read.question("Quel operateur? ");
let op2 = read.questionFloat("Deuxième operande? ");

let opération = (op1, op2, operateur) => {
  let result;
  switch (operateur) {
    case "+":
      result = op1 + op2;
    case "-":
      result = op1 - op2;
    case "/":
      result = op1 / op2;
    case "*":
      result = op1 * op2;
  }
  return result;
};
console.log(opération(op1, op2, operateur));

let read = require("readline-sync");

let nbre = read.questionInt("Donne moi un entier");

let sommeDuNombre = (nbre) => {
  let i = nbre;
  let sum = nbre;
  while (i !== 0) {
    sum = sum + i - 1;
    i--;
  }
  return sum;
};

console.log(sommeDuNombre(nbre));

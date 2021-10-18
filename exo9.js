let read = require("readline-sync");
let nbre = read.questionInt("Donne moi un entier : ");

let pyramide = (nbre) => {
  for (var i = 0; i <= nbre; i++) {
    console.log("*".repeat(i));
  }
  for (var i = nbre - 1; i > 0; i--) {
    console.log("*".repeat(i));
  }
};

pyramide(nbre);

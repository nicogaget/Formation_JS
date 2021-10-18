let read = require("readline-sync");
let nbre = read.questionInt("Donne moi un entier : ");

let pyramide = (nbre) => {
  let etoile = 1;
  for (var i = 1; i <= nbre; i++) {
    console.log(" ".repeat(nbre - i) + "*".repeat(etoile));
    etoile += 2;
  }
};

pyramide(nbre);

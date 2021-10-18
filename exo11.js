let read = require("readline-sync");
let nbr = read.questionFloat("Donne moi un nombre a deux decimal : ");

let monnaies = [
  500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

console.log(`Voici la monnaie necessaire pour : ${nbr}€`);
monnaies.forEach((m) => {
  if (Math.trunc(nbr / m) > 0) {
    m >= 5
      ? console.log(`Billet de ${m}€ : ${Math.trunc(nbr / m)}`)
      : console.log(`Piece de ${m}€ : ${Math.trunc(nbr / m)}`);

    nbr = (nbr % m).toFixed(2);
  }
});

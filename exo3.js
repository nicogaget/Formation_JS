let read = require("readline-sync");
let pv = read.questionFloat("Prix de vente? ");
let pf = read.questionFloat("prix de fabrication? ");

let perteOuProfit = (pv, pf) => {
  if (pv > pf) {
    let profit = pv - pf;
    return `Profit de ${profit}€`;
  } else if (pf > pv) {
    let perte = pf - pv;
    return `Perte de ${perte}€`;
  } else return `Ni perte ni profit!!`;
};

console.log(perteOuProfit(pv, pf));

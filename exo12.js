let temps = [12, 25, -1, -6, -5, -3, 15, 85];

let laPlusProche = 500;

temps.forEach((temp) => {
  if (
    Math.abs(temp) < laPlusProche ||
    Math.abs(temp) < Math.abs(laPlusProche)
  ) {
    laPlusProche = temp;
  }
});
console.log(`La température la plus proche de zéro est ${laPlusProche}.`);

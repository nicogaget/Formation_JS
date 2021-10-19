/*
Demandez à l'utilisateur de saisir un nombre de tentative pour simuler les "30 secondes".
(Ce nombre de tentatives représentera le nombre d'échec possible)

Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.

Construisez le programme permettant de :

Saisir un nombre
Comparer le nombre avec le résultat attendu "N"
Afficher "Plus" ou "Moins"
Retirer une vie
*/

let read = require("readline-sync");
let input;
let tentatives;
let aTrouver = Math.floor(Math.random() * 50);
let isOk = false;
do {
  tentatives = read.questionInt("Nombre de tentative(max=10): ");
} while (tentatives < 1 || tentatives > 10);

console.log("Trouve une nombre entre 1 et 50");

do {
  input = read.questionInt("entre un nombre :");
  tentatives--;
  if (input < aTrouver) {
    console.log(`Plus grand, encore ${tentatives} tentatives, essaye encore`);
  } else if (input > aTrouver) {
    console.log(`Plus petit, encore ${tentatives} tentatives`);
  } else {
    console.log("gagner");
    isOk = true;
  }
} while (!isOk && tentatives > 0);

console.log("Merci d'avoir jouer!!");

let read = require("readline-sync");

let nom = read.question("Quel est votre nom?").toUpperCase();

console.log("Bienvenue " + nom);

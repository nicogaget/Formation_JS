let read = require("readline-sync");
let nbre = read.questionInt("Donne moi un entier : ");
let fizzBuzz = (nbre) => {
  let result;
  for (let i = 1; i <= nbre; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result = "FIZZBUZZ";
    } else if (i % 3 == 0) {
      result = "FIZZ";
    } else if (i % 5 == 0) {
      result = "BUZZ";
    } else result = i;
    console.log(result);
  }
};

fizzBuzz(nbre);

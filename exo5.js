let notes = [2, 5, 10, 8, 9, 15, 18, 12, 20];

notes.forEach((element) => {
  if (element <= 4) {
    console.log(`Catastrophe !!`);
  } else if (element <= 10) {
    console.log(`Insuffisant`);
  } else if (element <= 14) {
    console.log(`Peut mieux faire!`);
  } else if (element <= 18) {
    console.log(`Bien !!`);
  } else console.log(`Excellent , good job!!!!!!!!`);
});

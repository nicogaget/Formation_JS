let nbrePlaces = 5;
let nbreTours = 3;
let file = [1, 1, 1, 1];
let profitGlobal = 0;
let ReadyToGo = false;
var prixDuTicket = 1;
var BreakException = {};
function profitDuWagon(prix, groupe) {
  return prix * groupe;
}

for (let t = 0; t <= nbreTours - 1; t++) {
  let estControlé = false;
  let fileParcourue = false;
  while (!estControlé) {
    let g1 = file[0];
    console.log(`chargement 1er group: groupe de ${g1} personnes`);
    file = file.slice(1, file.length);
    profitGlobal += profitDuWagon(prixDuTicket, g1);

    let nbrPlaceLibre = nbrePlaces - g1;

    if (nbrPlaceLibre > 0 || !fileParcourue) {
      for (i = 0; i < file.length - 1; i++) {
        if (!fileParcourue) {
          for (let groupe of file) {
            if (nbrPlaceLibre >= groupe) {
              groupeSuivant = groupe;
              console.log(`Embargquement du groupe ${groupe}`);
              nbrPlaceLibre -= groupe;
              profitGlobal = profitGlobal + profitDuWagon(prixDuTicket, groupe);
              file = file.slice(1, file.length);
              file.push(groupeSuivant);
            }
          }
          fileParcourue = true;
          file.push(g1);
        }
      }
    }
    estControlé = true;
    console.log(`C'est parti pour le tour ${t + 1} sur ${nbreTours} tours`);
  }
}
console.log(profitGlobal);

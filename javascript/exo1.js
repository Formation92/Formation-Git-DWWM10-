
let msg1 = "Bonjour";
let msg2 = "pour le cours de JS !";

let msg = msg1 + " " + msg2;

// let msg3 = prompt("Entrez votre prénom :");
let msg3 = "Mickaël";

/* Exemple de commentaire
sur plusieurs lignes */

console.log(msg3 + " - " + msg);

// alert(msg);

let CA = prompt("Entrez votre chiffre d'affaire : ");


if (CA <=0 && CA <=200 ) {
    let retour = " Petit client ";
    console.log(retour);
}
else if (CA =201 && CA >=2000 ) {
    let retour = " Client ";
    console.log(retour);
}
else if (CA = 2001 && CA >=10000 ) {
    let retour = " Client à potentiel";
    console.log(retour);
}
else {
    (CA >10000 )
    let retour = " Client Grand Compte";
    console.log(retour);
}


let Variable1 = 100;

if (Variable1 >50 ) {
    let retour = " Nombre supérieur à 50";
    console.log(retour);
}
else {
    let retour = " Nombre inférieur ou égal à 50";
    console.log(retour);
}


let retour2 = ( Variable1 >50 ) ? " Nombre supérieur à 50" : " Nombre inférieur ou égal à 50";
console.log(retour2);



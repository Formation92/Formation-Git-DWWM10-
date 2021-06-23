/*
let nom = prompt("Veuillez saisir votre nom : ");
let prenom = prompt("Vauillez saisir votre prénom : ");

document.getElementById("nom").innerHTML = nom;
document.getElementById("prenom").innerHTML = prenom;
*/
//parse

//let ca = Number(prompt("Veuillez saisir votre chiffre d'affaires : "));



let str = "";

function getTypeClient() {
    //alert("Chiffre saisi = " + document.getElementById("ca"));
    let ca = Math.round(Number(document.getElementById("ca").value));
    //alert("Chiffre saisi = " + ca);
    if (ca > 0) {

        if (ca <= 200)
            str = "Petit client";
        else if (ca > 201 && ca <= 2000)
            str = "Client";
        else if (ca >= 2001 && ca <= 10000)
            str = "Client à potentiel";
        else if (ca > 10000)
            str = "Grand compte";
    } else(str = "Vous  avez fait faillite...");

    //alert(str);
    document.getElementById("typeclient").innerHTML = str;
}


function calculePrixTotal() {
    let prixTotal = 0;
    let coefficient = 0;
    let nbCopies = Math.round(Number(document.getElementById("copies").value));

    let a = 0;


    if (nbCopies > 0) {

        a = 10;

        if (nbCopies < 10)
            coefficient = 0.5;        
        else if (nbCopies >= 10 && nbCopies <= 20)
            coefficient = 0.4;
        else
            coefficient = 0.3;
    }

    console.log(a);

    prixTotal = coefficient * nbCopies;

    document.getElementById("coefficient").innerHTML = "Coefficient = " + coefficient;
    document.getElementById("prixtotal").innerHTML = "Prix total : " + prixTotal;

    if (prixTotal > 10) 
        document.getElementById("prixtotal").style.backgroundColor = "yellow";
    else 
        document.getElementById("prixtotal").style.backgroundColor = "white";

}
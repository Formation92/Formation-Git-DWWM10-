/* Fonctions appelées dapuis nos pages html */
/* Affichage du type de client */
function getTypeClient() {
    let str = "";
    let ca = Math.round(Number(document.getElementById("ca").value));
    if (ca > 0) {
        if (ca <= 200)
            str = "Petit client";
        else if (ca > 201 && ca <= 2000)
            str = "Client";
        else if (ca >= 2001 && ca <= 10000)
            str = "Client à potentiel";
        else if (ca > 10000)
            str = "Grand compte";
    } else(str = "Client falimentaire ...");

    //alert(str);
    document.getElementById("typeclient").innerHTML = str;
}
/* Exercice photocopies : calcul du prix total et adaptation de l'affichage selon valeur */
function calculePrixTotal() {
    let prixTotal = 0;
    let coefficient = 0;
    let nbCopies = Math.round(Number(document.getElementById("copies").value));
    if (nbCopies > 0) {
        if (nbCopies < 10)
            coefficient = 0.5;
        else if (nbCopies >= 10 && nbCopies <= 20)
            coefficient = 0.4;
        else
            coefficient = 0.3;
    }

    prixTotal = coefficient * nbCopies
    document.getElementById("coefficient").innerHTML = "Coefficient : " + coefficient;
    document.getElementById("prixtotal").innerHTML = "Prix total : " + prixTotal;

    if (prixTotal > 10)
        document.getElementById("prixtotal").style.backgroundColor = "yellow";
    else
        document.getElementById("prixtotal").style.backgroundColor = "white";
}

function afficheTable() {

    let nrtable = Math.round(Number(document.getElementById("tablemultiplication").value));

    //conteneurtable
    let debut = "<table>" + /* "<caption>Table de miltiplication pour " + nrtable + " </caption>" +*/
        "<thead><th>position</td>" + "<th>résultat</td>" + "</thead><tbody>";
    let fin = "</tbody></table>";
    let constructiontable = "";

    if (nrtable > 0 && nrtable <= 10) {
        for (i = 0; i <= 10; i++) {
            constructiontable += "<tr><td>" + i + "</td>"
            constructiontable += "<td>" + i * nrtable + "</td></tr>"
        }

        document.getElementById("conteneurtable").innerHTML = debut + constructiontable + fin;
    } else document.getElementById("conteneurtable").innerHTML = "Veuillez saisir un nombre strictement positif au plus égal à 10."
}
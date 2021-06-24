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


function afficheTabledeMultiplication() {

    let nrtable = Math.round(Number(document.getElementById("tablemultiplication").value));

    //conteneurtable
    let debut = "<table>" + // "<caption>Table de miltiplication pour " + nrtable + " </caption>" +
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



function afficheTablesDeMultiplicationJusquaDix() {
    //let nrtable = Math.round(Number(document.getElementById("tablemultiplication").value));
    let debut = "";

    for (nrtable = 1; nrtable <= 10; nrtable++) {
        debut = "<table>" + "<thead><th>position</td>" + "<th>résultat</td>" + "</thead><tbody>";
        let fin = "</tbody><caption>" + " table de " + nrtable + "</caption></table>";
        let constructiontable = "";


        for (i = 0; i <= 10; i++) {
            constructiontable += "<tr><td>" + i + "</td>"
            constructiontable += "<td>" + i * nrtable + "</td></tr>"
        }
        document.getElementById("conteneurtable").innerHTML += debut + constructiontable + fin;

    }
}


function afficheNombreEnToutesLettres() {
    let nombre = Math.round(Number(document.getElementById("nombreEnLettres").value));
    let phraseFrancais = "";
    let chaineCentaines = "";
    let chaineDizaines = "";
    let chaineUnites = "";

    if (nombre >= 0 && nombre <= 999) {
        let centaines = Math.floor(nombre / 100);
        let dizaines = Math.floor((nombre - centaines * 100) / 10);
        let unites = nombre - 100 * centaines - 10 * dizaines;
        //Test affichage nombre décomposé  : 
        // document.getElementById("conteneurNombreRetranscrit").innerHTML = centaines + " - " + dizaines + " - " + unites;

        //
        if (centaines == 0) chaineCentaines = "";
        else if (centaines == 1) chaineCentaines = "cent";
        else chaineCentaines = nombreMaxVingt(0, 0, centaines) + " cents";
        //Remarque : on se sert de façon impropre de la fonction "nombreMaxVingt" pour
        //retourner le nombre de centaines, en forçant à 0 des deux premiers paramètres
        //C'est crade, mais ça marche.

        chaineDizaines = nombreDizaines(dizaines);

        chaineUnites = nombreMaxVingt(centaines, dizaines, unites);

        phraseFrancais = chaineCentaines + " " + chaineDizaines + " " + chaineUnites;

        document.getElementById("conteneurNombreRetranscrit").innerHTML = phraseFrancais;
    } else document.getElementById("conteneurNombreRetranscrit").innerHTML = "Veuillez saisir un nombre strictement positif au plus égal à 999."

    //n s'en sert pour retourner la chaîne de caractères de entiers 0 à 19. Aucune règle 
    //d'assemblage en sous-chaînes ne régit l'écriture les 20 premier chiffres en français.
    //C'est codé avec les pieds, mais ça marche*/
    function nombreMaxVingt(centaines, dizaines, unite) {
        let chaine = "";
        switch (unite) {
            case 0:
                chaine = "zéro";
                if (dizaines > 0 || centaines > 0)
                    chaine = "";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "dix";
                break;
            case 1:
                chaine = "un";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "onze";
                if (dizaines >= 2 && dizaines <= 7)
                    chaine = "et " + chaine; // vingt "ET" un... soixante "ET" onze (seulement pour 1 et 11 si les dizaines sont entre 2 et 7)
                break;
            case 2:
                chaine = "deux";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "douze";
                break;
            case 3:
                chaine = "trois";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "treize";
                break;
            case 4:
                chaine = "quatre";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "quatorze";
                break;
            case 5:
                chaine = "cinq";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "quinze";
                break;
            case 6:
                chaine = "six";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "seize";
                break;
            case 7:
                chaine = "sept";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "dix-sept";
                break;
            case 8:
                chaine = "huit";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "dix-huit";
                break;
            case 9:
                chaine = "neuf";
                if (dizaines == 1 || dizaines == 7 || dizaines == 9)
                    chaine = "dix-neuf";
                break;
            case 10:
                chaine = "dix";
                break;
        }
        return chaine;
    }

    //Retourne en toutes lettres le nombre de dizaines entre 20 et 90
    //Notez la particularité de la langue française pour 70 et 90
    function nombreDizaines(n) {
        //n = Nombre(n);
        switch (n) {
            case 2:
                chaine = "vingt";
                break;
            case 3:
                chaine = "trente";
                break;
            case 4:
                chaine = "quarante";
                break;
            case 5:
                chaine = "cinqante";
                break;
            case 6:
            case 7:
                chaine = "soixante";
                break;
            case 8:
            case 9:
                chaine = "quatre-vingt";
                break;
            default:
                chaine = "";
                break;
        }
        return chaine;
    }
}
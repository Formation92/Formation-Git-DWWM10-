
function calculer() {

    let CA = document.getElementById('CA').value;

    if (CA>=0 && CA<=200) {
        document.getElementById("StatutClient").innerHTML= "Petit client";
    }
    else if (CA>=201 && CA <= 2000) {
        document.getElementById("StatutClient").innerHTML= "Client";
    }
    else if (CA>= 2001 && CA <= 10000) {
        document.getElementById("StatutClient").innerHTML= "Client a potentiel";
    }
    else {
        document.getElementById("StatutClient").innerHTML= "Client Grand Compte";
    }


    let nbAnnee = document.getElementById('nbAnnee').value;

    let resultat = CA * nbAnnee;

    document.getElementById("info").innerHTML = "<b>Liste des valeurs : </b>"
    + "<ul>"
    + "<li class='rouge'> CA : " + CA +"</li>"
    + "<li> Nombre d'année(s) : " + nbAnnee +"</li>"
    + "<li class='rouge'> Multiplication : " + resultat +"</li>"
    + "</ul>";

}
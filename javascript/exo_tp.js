let resultat = 0;
let message = "";
let table = "";
entetetableau = "<table><tr><td> " + a + " </td></tr>";
let fintableau = "</table>"



for (let a = 0 ; a <= 10 ; a = a + 1) {

    // document.getElementById("abscisse").innerHTML = a;

    ligneEnCours = "<tr>"

    for (let y = 0 ; y <= 10 ; y = y + 1) {

        // resultat = a*y

        ligneEnCours = ligneEnCours + ligne(a,y);

    }

    ligneEnCours = ligneEnCours + "<tr>"

    table = table + ligneEnCours;
}


function ligne(a,y) {
    return "<td> " + a*y + " </td>";
}
// A partir d'un nombre saisi par l'utilisateur via la page HTML :
// - Vérifiez que le nombre est entre 1 et 10
// - Si oui, afficher la table de multiplication de 0 à 10 avec ce nombre
// - Question supplémentaire : afficher cette table dans un tableau HTML

function TableMultiplication() {

    let nombre = document.getElementById("nombre").value; 

    let table = "";

    if (nombre >= 0 && nombre <=10 ) {

        let entete_tableau = "<table><tr><th>Opérande</th><th>Opérateur</th><th>Opérande 2</th><th></th><th>Résultat</th></tr>";
        let fin_tableau   = "</table>";

        for (let i = 0; i <= 10; i = i + 1) {

            resultat = i*nombre

            ligne = ConstruireLigneTableau(i, nombre);
                       
            table = table + ligne ;

        }
        document.getElementById("resultat").innerHTML = entete_tableau + table + fin_tableau;
    }
    else
        document.getElementById("resultat").innerHTML = "Nombre non compris entre 0 et 10";
}


/*
    Fonction qui crée une ligne de tableau au format HTML du style :

        a * b = (produit de la multiplication )
*/
function ConstruireLigneTableau(parametre1, parametre2) {

    return "<tr><td>" + parametre1 +"</td><td>*</td><td>"+ parametre2 +" </td><td>=</td><td> "+ parametre1*parametre2 +"</td></tr>";;

}

/*
    Multiplication : fonction qui simule la multiplication numérique

    Cette fonction prend 3 paramètres : param1, param2, param3

    Elle retourne comme résultat param1 x param2 x param3

*/
function Multiplication(param1, param2, param3) {

    document.getElementById("resultat").innerHTML = "Resultat = " + param1 * param2 * param3 ;

}

function calcul() {

    let nb1 = Number(document.getElementById("nombre1").value);
    let nb2 = Number(document.getElementById("nombre2").value);
    let nb3 = Number(document.getElementById("nombre3").value);

    Multiplication(nb1, nb2, nb3);

}
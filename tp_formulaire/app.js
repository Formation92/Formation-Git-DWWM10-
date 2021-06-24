/*
Énoncé
Calculer le salaire d'une personne sur base de son salaire brut en décomptant les frais suivants:
•    Impôts sur le revenu : 18%
•    Assurance employé : 7%
•    Régime de pensions de Corse : 5%
Les personnes peuvent recevoir comme supplément un bonus de 100€ ou une allocation de 150€.
Il est possible de recevoir des réductions sur les impôts sur le revenu sous certaines conditions :
•    Si le travailleur est une femme, elle reçoit 2% de réduction.
•    Si le travailleur a 3 personnes à charge, il reçoit 1% de réduction.
•    Si le travailleur a 4 personnes à charge, il reçoit 2% de réduction.
Pour le (2), vous aurez besoin de checbox et d'une liste à option
*/




/* MODIFICATION 3 */

// Constantes

const form = document.getElementById('form');

const salaireBrut = document.getElementById('salaire'); 
const bonnus = document.getElementById('bonnus');
const alloc = document.getElementById('alloc'); 

const femme = document.getElementById('femme');
const homme = document.getElementById('homme'); 

const personneCharge = document.getElementById('personneACharge'); 


const blocResult = document.getElementById('resultat'); 
const result = document.getElementById('result'); 


const fraisDeductible = 0.3;

// Variables portée Global 

let brut = 0; 
let prime = "";
let sex = "";
let nbrCharge = ""; 
let salaireNetApresImpot = 0; 




// Affichage du resultat sur la page HTML

function updateDOM() {

    // Suppression de l'attribu Hidden present sur la Div resultat
    blocResult.hidden = false; 

    // Mise à jour dynamique du texte du paragraphe 'result'
    result.textContent = `Votre salaire net est de ${salaireNetApresImpot}€  par mois`;

}

// Calcul du salaire Net 

function calculSalaireNet(){

    
    if ( sex == "femme"){
        if( nbrCharge === 3){

            salaireNetApresImpot = brut - (brut * (fraisDeductible - 0.03)) + prime; 

        } else if (nbrCharge === 4){

            salaireNetApresImpot = brut - (brut * (fraisDeductible - 0.04)) + prime;

        } else ; 

    } else {
        if( nbrCharge === 3){

            salaireNetApresImpot = brut - (brut * (fraisDeductible - 0.01)) + prime;

        } else if (nbrCharge === 4){

            salaireNetApresImpot = brut - (brut * (fraisDeductible - 0.02)) + prime;

        } else  salaireNetApresImpot = brut - (brut * fraisDeductible) + prime; 
    }

    // Appel de la fonction updateDOM pour afficher le resultat sur la page HTML

    updateDOM(); 
    
}

// Recuperation des données entré via le formulaire HTML

function getData(e){
    e.preventDefault(); 

    // Recuperation Salaire brut
    brut = Number(salaireBrut.value); 

    // Recuperation montant bonnus choisi
    bonnus.checked ? prime = 100 : prime = 150; 

    // Recuperation donné sexe
    femme.checked ? sex= "femme" : sex = "homme"; 

    /* Même résultat avec ces 2 autres syntaxes :
    
    if (femme.checked)
        sex = "femme";
    else
        sex = "homme";

    sex = femme.checked ? "femme" : "homme"; */

    // Recuperation donné personne à charge
    nbrCharge = Number(personneCharge.value); 
    

    // Appel de la fonction calculSalaireNet
    calculSalaireNet(); 


}


// Event Listener

form.addEventListener('submit', getData); 

function validez() {
    let baliseParagraphe = document.getElementById("salut");
    baliseParagraphe.innerHTML = "Bonjour ! " + obtenirUtilisateur() + " !!!";
    baliseParagraphe.style.color="#3961d6";
    baliseParagraphe.style.fontSize="24px";
    
}


function obtenirUtilisateur() {
    let prénom = document.getElementById("p_user").value;
    let nom = document.getElementById("n_user").value;
    let spc = " ";
    return prénom + spc + nom ;
}



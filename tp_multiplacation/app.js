
const tabContainer = document.getElementById('tabContainer'); 
 
function createTab() {

    let table = ""; 
    
        
        for (let i = 0; i <= 10; i++) {

            const tab = document.createElement('div');
            tab.setAttribute("id", `resultat${i}`); 
            tab.setAttribute("class", 'tab-container');


            let title = `<h2> table de ${i} </h2>`; 
            let entete_tableau = "<table><tr><th>Opérande</th><th>Opérateur</th><th>Opérande 2</th><th></th><th>Résultat</th></tr>";
            let fin_tableau   = "</table>";


            for ( let j = 0; j <= 10; j++){

                resultat = i * j;

                ligne = "<tr><td>" + i +"</td><td> * </td><td>"+ j +" </td><td>=</td><td> "+ resultat +"</td></tr>";


                table = table + ligne ;
            }

            

           
            tabContainer.append(tab);

            document.getElementById(`resultat${i}`).innerHTML = title + entete_tableau + table + fin_tableau;

            table =""; 
            
        }

        
   
}









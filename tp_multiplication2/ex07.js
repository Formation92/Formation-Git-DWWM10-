
var table=document.getElementById("Totale");

var output="";

// i : Parcours les lignes (=chaque table de multiplication)

for(var i=0;i<=10; i++) {

    output+="<tr>";

    // j : Parcours des colonnes

    for(var j=0;j<=10;j++) {

        if (i==0 && j==0)
            output += "<th>&times;</th>";
        else 
        {
            if (i==0 || j==0) {

                if (i==0)
                    output += "<th>"+j+"</th>";
                else
                    output += "<th>"+i+"</th>";

                // output += "<th>"+(i+j)+"</th>";
            }
                
            else
                output += "<td>"+i*j+"</td>";
        }

    }
}

table.innerHTML=output;
console.log(output);
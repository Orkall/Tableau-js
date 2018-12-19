function tournage() {
    
    
    document.querySelector(".resultatT").innerHTML  = document.querySelector(".nHeureT").value * 2 + " Franc" ;
    
}

function montage(){
   
    document.querySelector(".resultatM").innerHTML = document.querySelector(".nHeureM").value * 7  + " Franc"; 
}

function  addCredit(){
    if ( parseInt(document.querySelector(".resultatT").innerHTML) > 0 || parseInt(document.querySelector(".resultatM").innerHTML) > 0)
        document.querySelector(".creditI").innerHTML =  "5" + " Franc";
    else (document.querySelector(".creditI").innerHTML =  "0" + " Franc")

         
    document.querySelector(".totalCredit").innerHTML   = parseInt( document.querySelector(".resultatT").innerHTML) + parseInt( document.querySelector(".resultatM").innerHTML + " Franc") + parseInt( document.querySelector(".creditI").innerHTML + " Franc")  ;

    document.querySelector(".totalEuro").innerHTML   = parseInt(document.querySelector(".totalCredit").innerHTML / 6.55954  ) + " €";

}

function addRow(elmt, value)
{   
    var th = document.createElement('th');
    var tr = document.createElement('tr');
    elmt.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);

   
   
}


    

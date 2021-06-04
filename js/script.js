document.getElementById("genera").addEventListener("click", function(){
    
    document.getElementById("output").className = "show";

    var nome = document.getElementById("identita").value;
    
    var km = parseInt(document.getElementById("km").value);
    console.log(km);
    var prezzo = (km * 0.21).toFixed(2);
    
    var eta = document.getElementById("eta").value;
    
    if (eta == "Minorenne") {
        prezzo = prezzo - (prezzo / 100 * 20) + "€"
    } else if (eta == "Over-65") {
        prezzo = prezzo - (prezzo / 100 * 40) + "€"
    } else {prezzo = prezzo + "€"}
    prezzo = parseFloat(prezzo).toFixed(2);

    var nCarrozza = Math.floor(Math.random()*9) + 1;
    var ncod = Math.floor(Math.random() * (100000 - 90000 +1)) + 90000;

    document.getElementById("id").innerHTML = nome;
    document.getElementById("offerta").innerHTML = eta;
    document.getElementById("carrozza").innerHTML = nCarrozza;
    document.getElementById("cod-cp").innerHTML = ncod;
    document.getElementById("prezzo").innerHTML = prezzo + "€";

}); 


document.getElementById("annulla").addEventListener("click", function(){
    
    document.getElementById("output").className = "hidden";
    document.getElementById("identita").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "vuoto";


}); 
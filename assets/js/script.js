
$(document).ready, function () {

    var selectOrigen  = document.getElementById('origen');
    var selectDestino = document.getElementById('destino');
    var glorigen = "";
    var gldestino = "";
    var glescala = "";
    var fecOrigen ="";
    var fecDestino ="";

    
    origen.addEventListener('change', function(){
        var selectedOption = this.options[origen.selectedIndex];
        glorigen = selectedOption.text ;
        document.getElementById("glosa-origen").innerHTML = glorigen
        validaEscala(glorigen,gldestino)
    });
    
    destino.addEventListener('change', function(){
        var selectedOption = this.options[destino.selectedIndex];
        gldestino = selectedOption.text ;
        document.getElementById("glosa-destino").innerHTML = gldestino;
        validaEscala(glorigen,gldestino)
    });
    
    fechaOrigen.addEventListener('change', function(){
        var fecOrigen = document.getElementById('fechaOrigen').value
        document.getElementById("fecha-origen").innerHTML = fecOrigen
    });
    
    fechaDestino.addEventListener('change', function(){
        var fecDestino = document.getElementById('fechaDestino').value
        document.getElementById("fecha-destino").innerHTML = fecDestino
    });
    
    
    function validaEscala(glorigen,gldestino){

        if (glorigen == "" || gldestino == "") {
            document.getElementById("contenedor-itinerario").innerHTML =    ""
        }
        else if ((glorigen == "Boston" && gldestino == "Paris") || 
        (glorigen == "Chicago" && gldestino == "Venecia") ) {
            document.getElementById("glosa-escala").innerHTML =  `
            <p class="text-danger">! Ojo !! tu vuelo tiene una escalas</p>
            `
        } else
            document.getElementById("glosa-escala").innerHTML = "Tu vuelo no tiene escalas " 
    };
    
} 
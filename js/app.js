
var choix = document.getElementById("vehicule")
var carburant = document.getElementById("carburant")
var prix = 0
var totale = 0
var verifier_list = function() {

            
            switch (choix.value) {
                case "Citadine": 
                    document.getElementById("carburant").innerHTML = " <option> Essence</option> <option> Diesel</option> <option> Electrique</option> <option> Hybride</option>"
                    prix = 12 

                    break;
                case "Compact": 
                    document.getElementById("carburant").innerHTML = "<option> Essence</option> <option> Diesel</option>  <option> Hybride</option>"
                    prix = 14
                    break;

                case "Utilitaire": 
                    document.getElementById("carburant").innerHTML = " <option> Diesel</option>  "
                    prix = 16;
                    break;

                case "Engin de chantier": 
                    document.getElementById("carburant").innerHTML = "<option> Essence</option> <option> Diesel</option> "
                    prix = 900
                    break;

                case "Berline": 
                    document.getElementById("carburant").innerHTML = "<option> Essence</option> <option> Diesel</option>  <option> Hybride</option>"
                    prix = 20 + (20 * 0.19)
                    break;

                case "Camion": 
                    document.getElementById("carburant").innerHTML = " <option> Diesel</option> "
                    prix = 250 + (250 * 0.19)
                    break;
                case "Moto":
                    document.getElementById("carburant").innerHTML = " <option> Essence</option> <option> Electrique</option> "
                    prix = 10
                    break;
            }

        }


        var carburant = 0.0;
        var carb = document.getElementById("carburant").value;
        var  chekCarburant = function () {
            switch (carb) {
                case "Essence": carburant = 0.14
                    break;

                case "Hybride": carburant = 0.09
                    break;

                case "Diesel": carburant = 0.21
                    break;

                case "Electrique": carburant = 0.05
                    break;


            }

        }

       
       
        var estimation = function () {
            var n = document.getElementById("nombre-jours").value
            totale = n * (prix + (prix * carburant) ) + " €"
            document.getElementById("reslt").value = totale 
            
        }
        
        document.getElementById("btn-res").addEventListener("click", estimation) 

        
"use strict"
//menu on click
function menu() {
    var menudiv = document.getElementById("nav");
        if (menudiv.className === "navigation") {
            menudiv.className += " responsive";
        } else {
            menudiv.className = "navigation";
        }
    }
    
var d = new Date();
var days = ["söndag", "måndag", "tisdag", "Onsdag", "torsdag", "fredag", "lördag"];
document.getElementById("sale").innerHTML = days[d.getDay()];

//day

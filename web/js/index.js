"use-strict";

alert("hola");

function main(){
    // console.log("en el main");
    let myID = document.getElementById("gallery");
    myID.textContent = "Texto nuevo";

    
}

document.addEventListener("DOMContentLoaded", main);
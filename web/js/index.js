"use-strict";

alert("Hola! o suerte si estás recargando la página 🕯️");

import { galleryRenderer } from '/js/renderers/gallery.js';
function main() {

    let myB = document.getElementById("myB");
    myB.onclick = saludar;

    let container = document.getElementById("photo-gallery");
    let photos = [
        {
            title: "Samoyed",
            description: "El perro este que es más feo que pegarle a tu abuela.",
            userId: 1,
            url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
            date: "11/09/2001",
        },
        {
            title: "Chill de Cojones",
            description: "Es que el puto tío este está chill de cojones, ¿no lo ves?",
            userId: 2,
            url: "https://i.pinimg.com/736x/33/ff/9f/33ff9ffaf0a5f7be5e6c0c51a456b2da.jpg",
            date: "01/01/2021",
        },
        {
            title: "Si hombre no me jodas",
            description: "No me gusta hacer paginas webs no te voy a mentir",
            userId: 3,
            url: "https://img.kwcdn.com/product/fancy/9f559fbf-8334-4dd2-8a3f-5ee278e15fee.jpg?imageView2/2/w/800/q/70/format/webp",
            date: "03/02/2019",
        },
        {
            title: "Imagen Pinterest muy Mala",
            description: "si",
            userId: 4,
            url: "https://i.pinimg.com/736x/a8/3b/eb/a83beb98013e7d8e97026fb689569ac1.jpg",
            date: "14/08/2019",
        },
    ];
    let gallery = galleryRenderer.asCardGallery(photos);
    container.appendChild(gallery);

    let cards = document.querySelectorAll("div.card");
    for (let card of cards) {
        card.onmouseenter = handleMouseEnter;
        card.onmouseleave = handleMouseLeave;
    }
}

function handleMouseEnter(event) {
    let card = event.target;
    card.style.border = "1.5px solid purple";
}

function handleMouseLeave(event) {
    let card = event.target;
    card.style.border = "none";
}


function saludar(event){
    // alert("Me has tocado muy fuerte");
    let myB2 = event.target;
    alert(myB2.textContent)
}

document.addEventListener("DOMContentLoaded", main);
"use strict";

document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

//Henter DOM Elementer fra buttons
const getprodukterBtn = document.getElementById("produktBtn");
const getbackTop = document.getElementById("backTop");
const getSec2 = document.getElementById("sec2-scroll");

getbackTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

getprodukterBtn.addEventListener("click", () => {
    getSec2.scrollIntoView({
        behavior: "smooth"
    });
});





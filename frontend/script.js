/*====================================
FM STORE Lead Connect v5
script.js
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    const mobile = document.getElementById("mobileCard");
    const clothing = document.getElementById("clothingCard");
    const repair = document.getElementById("repairCard");

    mobile.addEventListener("click", () => {
        window.location.href = "mobile.html";
    });

    clothing.addEventListener("click", () => {
        window.location.href = "clothing.html";
    });

    repair.addEventListener("click", () => {
        window.location.href = "repair.html";
    });

});

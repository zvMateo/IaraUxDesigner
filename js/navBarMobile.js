const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".openMenu");
const closeMenuBtn = document.querySelector(".closeMenu");
const profileBtn = document.querySelector(".profileBtn");

function toggleMenu(){
    menu.classList.toggle("menuOpened");
    profileBtn.classList.toggle("menuOpenedButton")
}

openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);
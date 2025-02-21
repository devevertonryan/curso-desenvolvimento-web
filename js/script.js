const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".nav-menu-mobile");
const accordion = document.querySelectorAll(".accordion-header");

function toggleMenu() {
    menu.classList.toggle("menu-toggle");
    menuMobile.classList.toggle("menu-toggle");
}

menu.addEventListener("click", toggleMenu);
menuMobile.addEventListener("click", toggleMenu);

accordion.forEach((accordion) => {
    const accResponse = accordion.nextElementSibling;
    const accArrow = accordion.querySelector(".acc-arrow");
    
    accordion.addEventListener("click", () => {
        
        accArrow.classList.toggle("acc-arrow-rotate");
        
        if (accResponse.style.maxHeight) {
            accResponse.style.maxHeight = null;
        } else {
            accResponse.style.maxHeight = `${accResponse.scrollHeight}px`;
        }
    });
});
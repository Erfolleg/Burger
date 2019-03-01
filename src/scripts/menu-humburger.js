////////////////////////////////////////////////////////////
//гамбургер меню
const buttons = document.querySelector('.hamburger-menu-link');
const openMenu = document.querySelector('.humburger-menu');
const closeMenu = document.querySelector('.humburger-menu__close');

buttons.addEventListener('click', () => {

    openMenu.style.display = "block";
    document.body.style.overflow = "hidden";
})


closeMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    document.body.style.overflow = "visible";
})

const humburgerItem = document.querySelectorAll('.humburger-menu__item');

for (const linkhumburger of humburgerItem) {
    linkhumburger.addEventListener('click', () => {
        openMenu.style.display = "none";
        document.body.style.overflow = "visible";
    });
}
////////////////////////////////////////////////////////////
//гамбургер меню
const buttons = document.querySelector('.hamburger-menu-link');
const openMenu = document.querySelector('.humburger-menu');
const closeMenu = document.querySelector('.humburger-menu__close');
buttons.addEventListener('click', () => {

    openMenu.style.display = 'block';
    var _body = document.getElementsByTagName('body')[0];
    _body.style.overflow = "hidden";
})
closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'none';
    var _body = document.getElementsByTagName('body')[0];
    _body.style.overflow = "visible";
})

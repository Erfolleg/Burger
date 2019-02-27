/////////////////////////////////////////////////////////////// 
//////////меню аккордеон горизонтальный

const accoMenuList = document.querySelector('.menu-accordeon__list');
const accoMenuItem = document.querySelectorAll('.menu-accordeon__item');
let accoMenuItemLength = accoMenuItem.length;
const accoMenuClose = document.querySelector('.menu-accordeon__close');

accoMenuList.addEventListener('click', function (e) {
    for (let i = 0; i < accoMenuItemLength; i++) {
        accoMenuItem[i].classList.remove('menu-accordeon__item-active');
    }
});

for (let i = 0; i < accoMenuItemLength; i++) {
    accoMenuItem[i].addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (accoMenuItem[i].classList.contains('menu-accordeon__item-active')) {
            accoMenuItem[i].classList.remove('menu-accordeon__item-active');
        } else {
            for (let i = 0; i < accoMenuItemLength; i++) {
                accoMenuItem[i].classList.remove('menu-accordeon__item-active');
            }
            accoMenuItem[i].classList.add('menu-accordeon__item-active');
        }
    });
};

accoMenuClose.addEventListener('click', function (e) {
    accoMenuItem.classList.remove('menu-accordeon__item-active');
});




// const menuAccoContents = document.querySelectorAll('.menu-accordeon__content');
// const itemsMenu = document.querySelectorAll('.menu-accordeon__item');
// const widthItemMenu = document.querySelector('.menu-accordeon__trigger');
// const accoMenuClose = document.querySelector('.menu-accordeon__close');
// for (itemMenu of itemsMenu) {
//     itemMenu.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetMenu = e.target;
//         var contentMenu = targetMenu.nextElementSibling;
//         if (contentMenu.style.width == styleWidth) {
//             contentMenu.style.width = 0;
//         } else {
//             for (const menuAccoContent of menuAccoContents) {
//                 menuAccoContent.style.width = 0;
//             };
//             contentMenu.style.width = styleWidth;
//         };
//     });
// }
// function calculateWidth() {
//     let widthMenu = document.body.clientWidth;
//     let itemsMenuLength = itemsMenu.length;
//     let widthItemMenu = itemMenu.offsetWidth;
//     return ( if (900 <= widthMenu) {
//         let calWidthDesctop = (widthMenu - (widthItemMenu * itemsMenuLength)) / 2; //2 делим пополам
//     } else {
//         let calWidthDesctop = widthMenu - (widthItemMenu * itemsMenuLength);
//     });)
// };
// let requestWidth = calculateWidth();
// let styleWidth = requestWidth + 'px'

// accoMenuClose.addEventListener('click', function (e) {
//     menuAccoContent.style.width = 0;
// });

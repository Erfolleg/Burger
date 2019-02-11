////////////////////////////////////////////////////////////
//гамбургер меню
const buttons = document.querySelector('.hamburger-menu-link');
const openMenu = document.querySelector('.humburger-menu');
const closeMenu = document.querySelector('.humburger-menu__close');
buttons.addEventListener('click', () => {

    openMenu.style.display = 'block';
})
closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'none';
})

//////////////////////////////////////////////////////
///   вертикальный аккордеон команда
const items = document.querySelectorAll('.team-accordeon__item');

for (const item of items) {
    item.addEventListener("click", e => {
        const curItem = e.currentTarget;
        const delHref = curItem.querySelector('.team-accordeon__trigger');
        delHref.removeAttribute('href', '#');

        if (curItem.classList.contains('team-accordeon__item-active')) {
            curItem.classList.remove('team-accordeon__item-active');

        } else {
            for (const elem of items) {
                elem.classList.remove('team-accordeon__item-active');
            }
            curItem.classList.add('team-accordeon__item-active');

        }

    });
}

/////////////////////////////////////////////////////////////// 
//////////меню аккордеон горизонтальный

const itemsMenu = document.querySelectorAll('.menu-accordeon__item');
for (itemMenu of itemsMenu) {
    itemMenu.addEventListener('click', e => {
        const curItemMenu = e.currentTarget;
        const delMenuHref = curItemMenu.querySelector('.menu-accordeon__trigger');
        delMenuHref.removeAttribute('href', '#');

        if (curItemMenu.classList.contains('active')) {
            curItemMenu.classList.remove('active');
        } else {
            for (const elemMenu of itemsMenu) {
                elemMenu.classList.remove('active');
            }
            curItemMenu.classList.add('active');
        }

    })
}

///////////////////////////////////////////////////////////////
///Гамбургер состав

const buttonsComposition = document.querySelector('.burger__composition');
const composition = document.querySelector('.burger__products');
const width = screen.width;
const closeComposition = document.querySelector('.burger__products-close');
buttonsComposition.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (composition.classList.contains('active')) {
        composition.classList.remove('active');
    }
    else {
        if (width <= 768) {
            closeComposition.addEventListener('click', () => {
                composition.classList.remove('active');
            })
        } else {}
        composition.classList.add('active');

    }
})


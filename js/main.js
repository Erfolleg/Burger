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

//////////////////////////////////////////////////////
///   вертикальный аккордеон команда
const items = document.querySelectorAll('.team-accordeon__item');

for (const item of items) {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const curItem = e.currentTarget;

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
    itemMenu.addEventListener('click', (e) => {
        e.preventDefault();
        const curItemMenu = e.currentTarget;

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
const closeComposition = document.querySelector('.burger__products-close');
const width = document.body.clientWidth;
if (width <= '768') {
    buttonsComposition.addEventListener('click', e => {
        composition.style.display = 'block';
        composition.style.opacity = 1;
    })
    closeComposition.addEventListener('click', e => {
        composition.style.display = 'none';
        composition.style.opacity = 0.4;
    })
}


////////////////////////////////////////////////////////////////////
// слайдер Бургеры

const itemsBurger = document.querySelector('.burger__content-list');
const rightBtn = document.querySelector('.arrow-scroll__right');
const leftBtn = document.querySelector('.arrow-scroll__left');

const step = itemsBurger.firstElementChild.getBoundingClientRect().width;

const slidesInView = 1;
const maxRight = (itemsBurger.children.length - slidesInView) * step;
const minleft = 0;
let currentStep = 0;

rightBtn.addEventListener('click', e => {

    if (currentStep < maxRight) {
        currentStep += step;
        itemsBurger.style.right = `${currentStep}px`;
    } else {
        currentStep = 0;
        itemsBurger.style.right = 0;
    }
})

leftBtn.addEventListener('click', e => {

    if (currentStep > minleft) {
        currentStep -= step;
        itemsBurger.style.right = `${currentStep}px`;
    } else {
        currentStep = maxRight;
        itemsBurger.style.right = maxRight + 'px';
    }
})

/////////////////////////////////////////////////////////////////////
// modal
// отзывы
const reviewsList = document.querySelector('.reviews__list');
const popupReviews = document.querySelector('.popup__reviews');
const popupTitle = document.querySelector('.popup__content-title');
const popupText = document.querySelector('.popup__content-text');
const closePopupRev = document.querySelector('.popup__close-reviews');
const overlay = document.querySelector('.overlay');

reviewsList.addEventListener('click', e => {
    let elementRev = e.target;
    var _body = document.getElementsByTagName('body')[0];
    _body.style.overflow = "hidden";

    if (elementRev.tagName === 'A') {
        e.preventDefault();
        const reviewsItem = e.target.closest('.reviews__item');
        const reviewsTitle = reviewsItem.querySelector('.reviews__title').textContent;
        const reviewsText = reviewsItem.querySelector('.reviews__text').textContent;
        popupTitle.innerHTML = reviewsTitle;
        popupText.innerHTML = reviewsText;
        popupReviews.style.display = 'block';
    }
});

document.addEventListener('keyup', e => {
    let keyName = e.keyCode;

    if (keyName === 27) {
        popupReviews.style.display = 'none';
        var _body = document.getElementsByTagName('body')[0];
        _body.style.overflow = "visible";
    }
});

closePopupRev.addEventListener('click', e => {
    e.preventDefault();
    popupReviews.style.display = 'none';
    var _body = document.getElementsByTagName('body')[0];
    _body.style.overflow = "visible";
})

overlay.addEventListener('click', e => {
    if (e.target === overlay) {
        popupReviews.style.display = 'none';
        var _body = document.getElementsByTagName('body')[0];
        _body.style.overflow = "visible";
    }
})

/////////////////////////////////////////////////////////////////////////////////////
///// модал форма сообщения

const popupOrder = document.querySelector('.popup__order');
const closeBtnModal = document.querySelector('.btn-modal');
const formBtn = document.querySelector('.form__row-button');
const formMy = document.querySelector('#order-form');
const popupContentModal = document.querySelector('.popup__content-order');
const overlayOrder = document.querySelector('.overlay-order');

formBtn.addEventListener('click', e => {
    e.preventDefault();
    const formData = new FormData(formMy);
    const xhr = new XMLHttpRequest();
    xhr.responseText = 'JSON';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
        popupOrder.style.display = 'block';
        var _body = document.getElementsByTagName('body')[0];
        _body.style.overflow = "hidden";

        if (xhr.status >= 400) {
            popupContentModal.innerHTML = 'Произошла ошибка';
        } else {
            popupContentModal.innerHTML = 'Сообщение отправлено';
        }


    })
    
});

closeBtnModal.addEventListener('click', e => {
    popupOrder.style.display = 'none';
    var _body = document.getElementsByTagName('body')[0];
    _body.style.overflow = "visible";
})

overlayOrder.addEventListener('click', e => {
    if (e.target === overlayOrder) {
        popupOrder.style.display = 'none';
        var _body = document.getElementsByTagName('body')[0];
        _body.style.overflow = "visible";
    }
})
// function validateForm(form) {
//     let valid = true;

//     if (!validateForm(form.elements.name)) {
//         valid = false;
//     }
//     if (!validateForm(form.elements.phone)) {
//         valid = false;
//     }
//     if (!validateForm(form.elements.street)) {
//         valid = false;
//     }
//     if (!validateForm(form.elements.home)) {
//         valid = false;
//     }
//     return valid;
// };

// function validateField(field) {
//     if (!field.checkValidity()) {
//         field.nextElementSibling.textContent = field.validationMessage;
//         return false;
//     } else {
//         field.nextElementSibling.textContent = '';
//         return true;
//     }
// };
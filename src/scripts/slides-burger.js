////////////////////////////////////////////////////////////////////
// слайдер Бургеры

const itemsBurger = document.querySelector('.burger__content-list');
const widthContent = document.querySelector('.burger__content');
const rightBtn = document.querySelector('.arrow-scroll__right');
const leftBtn = document.querySelector('.arrow-scroll__left');
const burgerContentItems = document.querySelectorAll('.burger__content-item');


let step = widthContent.offsetWidth;
if (step < 1100) {
    for (let burgerContentItem of burgerContentItems) {
        burgerContentItem.style.width = step + 'px';
    }
}
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

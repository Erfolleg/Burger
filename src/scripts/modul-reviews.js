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

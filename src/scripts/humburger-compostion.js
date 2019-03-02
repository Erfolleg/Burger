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

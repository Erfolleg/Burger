/////////////////////////////////////////////////////////////////////////////////////
///// модал форма сообщения

const popupOrder = document.querySelector('.popup__order');
const closeBtnModal = document.querySelector('.btn-modal');
const formBtn = document.querySelector('.form__row-button');
const formMy = document.querySelector('#order-form');
const popupContentModal = document.querySelector('.popup__content-order');
const overlayOrder = document.querySelector('.overlay-order');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm(formMy)) {
        const name = formMy.elements.name.value;
        const phone = formMy.elements.phone.value;
        const comment = formMy.elements.comment.value;
        const to = 'hisaev@gmail.com';
        var formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('comment', comment);
        formData.append('to', to);
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/');
        xhr.send(formData);
        xhr.addEventListener('load', () => {
            popupOrder.style.display = 'block';
            var _body = document.getElementsByTagName('body')[0];
            _body.style.overflow = "hidden";

            if (xhr.status >= 400) {
                popupContentModal.innerHTML = 'Произошла ошибка ' + xhr.status;
            } else {
                popupContentModal.innerHTML = 'Сообщение отправлено';
            }
        })
    }

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

function validateForm(formMy) {
    let valid = true;
    const errors = document.querySelectorAll('.error');

    if (!validateField(formMy.elements.name)) {
        valid = false;
        for (let error of errors) {
            error.style.display = 'block';
        }
    }
    if (!validateField(formMy.elements.phone)) {
        valid = false;
        for (let error of errors) {
            error.style.display = 'block';
        }
    }   
    if (!validateField(formMy.elements.street)) {
        valid = false;
        for (let error of errors) {
            error.style.display = 'block';
        }
    }
    if (!validateField(formMy.elements.home)) {
        valid = false;
        for (let error of errors) {
            error.style.display = 'block';
        }
    }   
    return valid;
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    }
    else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}

// function numberOrder(){
//     if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57)
//     event.preventDefault();
// }
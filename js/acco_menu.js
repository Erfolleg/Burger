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
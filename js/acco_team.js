const items = document.querySelectorAll('.team-accordeon__item');

for (const item of items) {
    item.addEventListener("click", e => {
        const curItem = e.currentTarget;
        const delHref = curItem.querySelector('.team-accordeon__trigger');
        delHref.removeAttribute('href', '#');
        // const content = curItem.querySelector('.team-accordeon__content');
        // const textBlock = content.lastElementChild;
        // const textBlockTitle = textBlock.firstElementChild;
        // const titleHeight = textBlockTitle.getBoundingClientRect().height;
        // const textBlockDesc = textBlock.lastElementChild;
        // const descHeight = textBlockDesc.getBoundingClientRect().height;
        // const reqHeight = descHeight + titleHeight;
        if (curItem.classList.contains('active')) {
            curItem.classList.remove('active');
            // content.style.height = 0;
        } else {
            for (const elem of items) {
                elem.classList.remove('active');
                // elem.querySelector('.team-accordeon__content').getElementsByClassName.height = 0;
            }
            curItem.classList.add('active');
            // content.style.height = `${reqHeight}px`;
        }
        
    });
}
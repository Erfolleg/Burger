//////////////////////////////////////////////////////
///   вертикальный аккордеон команда
const itemsCommand = document.querySelectorAll('.team-accordeon__item');
for (const itemCommand of itemsCommand) {
    itemCommand.addEventListener("click", (e) => {
        e.preventDefault();
        const curItemCommand = e.currentTarget;
        if (curItemCommand.classList.contains('team-accordeon__item-active')) {
            curItemCommand.classList.remove('team-accordeon__item-active');
        } else {
            for (const elemCommand of itemsCommand) {
                elemCommand.classList.remove('team-accordeon__item-active');
            }
            curItemCommand.classList.add('team-accordeon__item-active');
        }
    });
}

const section = $('.section');
const display = $('.main__content');

let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const switchActiveClassInSideMenu = menuItemIndex => {
    $('.fixed-menu__item')
        .eq(menuItemIndex)
        .addClass('active')
        .siblings()
        .removeClass('active');
}

const perfomTransition = sectionEq => {
    if (inScroll) return;

    const sectionEqNum = parseInt(sectionEq);

    if (!!sectionEqNum === false) {
        console.error("не верное значение для аргумента sectionEq");
    }

    inScroll = true;

    const position = sectionEq * -100 + "%";

    section
        .eq(sectionEq)
        .addClass('active')
        .siblings()
        .removeClass('active');



    display.css({
        'transform': `translateY(${position})`
    })
    setTimeout(() => {
        inScroll = false;
        switchActiveClassInSideMenu(sectionEq);
    }, 800 + 300); //продолжительность транзишина + 300мс время для завершения энерция тачустроств
};

const scrollToSection = direction => {
    const activeSection = section.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'next' && nextSection.length) {
        perfomTransition(nextSection.index())
    }
    if (direction === 'prev' && prevSection.length) {
        perfomTransition(prevSection.index())
    }
}

$('.wrapper').on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollToSection('next');
    }
    if (deltaY < 0) {
        scrollToSection('prev');
    }

})

$('.wrapper').on('touchmove', e => {
    e.preventDefault();
});

$(document).on('keydown', e => {
    switch (e.keyCode) {
        case 40: scrollToSection('next'); break;
        case 38: scrollToSection('prev'); break;
    }
})

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

    const target = $(e.currentTarget).attr('data-scroll-to');

    perfomTransition(target);
})

if (isMobile) {
    $(window).swipe({
        swipe: function (event, direction) {
            const nextOrPrev = direction === 'up' ? 'next' : 'prev'
            scrollToSection(nextOrPrev);

        }
    })
}

const menu = document.querySelector('#menu-icon');
const close = document.querySelector('#close-icon');
const nav = document.querySelector('.header-nav.mobile .menu');
const backdrop = document.querySelector('.header-nav.mobile .backdrop');
console.log('dadadas');
menu.addEventListener('click', () => {
    console.log('open');

    openMenu();
})

close.addEventListener('click', () => {
    closeMenu();
})

backdrop.addEventListener('click', () => {
    closeMenu();
})

const openMenu = () => {
    console.log('open');

    nav.setAttribute('style', 'transform: translateX(0)');
    backdrop.setAttribute('style', 'opacity: 1; z-index: 99');

}

const closeMenu = () => {
    nav.setAttribute('style', 'transform: translateX(110%)');
    backdrop.setAttribute('style', 'opacity: 0; z-index: -1');

}

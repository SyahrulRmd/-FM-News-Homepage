console.log('asdadas');

const menu = document.querySelector('#menu-icon');
const close = document.querySelector('#close-icon');
const nav = document.querySelector('.header-nav.mobile .menu');
const backdrop = document.querySelector('.header-nav.mobile .backdrop');
console.log(nav);

menu.addEventListener('click', () => {
    openMenu();
})

close.addEventListener('click', () => {
    closeMenu();
})

backdrop.addEventListener('click', () => {
    closeMenu();
})

const openMenu = () => {
    nav.setAttribute('style', 'transform: translateX(0)');
    backdrop.setAttribute('style', 'display: block');
    menu.setAttribute('style', 'display: none');
}

const closeMenu = () => {
    nav.setAttribute('style', 'transform: translateX(110%)');
    backdrop.setAttribute('style', 'display: none');
    menu.setAttribute('style', 'display: block');
}

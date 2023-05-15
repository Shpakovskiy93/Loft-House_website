const menuBtn = document.querySelector('.header__nav-btn');
const menuBtnIcon = document.querySelector('.nav-icon');
const menu = document.querySelector('.header__top-wrapper');

menuBtn.addEventListener('click', e => {
    menuBtnIcon.classList.toggle('nav-icon--active');
    menu.classList.toggle('header__top-wrapper--mobile');
    document.body.classList.toggle('no-scroll');
})

burger = document.querySelector('.burger');
menu = document.querySelector('.menu');
navlist = document.querySelector('.navlist');


burger.addEventListener('click', () => {
    // menu.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    menu.classList.toggle('h-nav');
})
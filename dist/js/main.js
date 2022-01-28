const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItem = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);


function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuItem.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuItem.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}
document.addEventListener('scroll', ()=> {
    var header_position = window.scrollY;
    if (header_position > 200) {
        nav.style.backgroundColor = "#272727"
    }else {
       nav.style.backgroundColor = "transparent"
    }
})
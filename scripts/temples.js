const hamburger = document.querySelector('#menu');
const navMenu =document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
})
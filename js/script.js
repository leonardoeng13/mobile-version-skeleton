const menuIcon = document.querySelector
('.hamburguer-menu');
const navbarMobile = document.querySelector('.navbar-mobile');

menuIcon.addEventListener('click', () => {
    navbarMobile.classList.toggle('change');
})
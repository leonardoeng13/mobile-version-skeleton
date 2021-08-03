const menuIcon = document.querySelector
('.hamburguer-menu');
const navbarMobile = document.querySelector('.navbar-mobile');
const hideMobile = document.querySelector('#hideMobile');

menuIcon.addEventListener('click', () => {
    navbarMobile.classList.toggle('change');
    hideMobile.style.display = 'none';
    menuIcon.addEventListener('click', () =>{
        hideMobile.style.display = 'block';
    })
})
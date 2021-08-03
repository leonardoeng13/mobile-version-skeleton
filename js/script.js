const menuIcon = document.querySelector('.hamburguer-menu');
const navbarMobile = document.querySelector('.navbar-mobile');
const menuItem1 = document.querySelector('#menu-item1');
const menuItem2 = document.querySelector('#menu-item2');
const menuItem3 = document.querySelector('#menu-item3');
const menuItem4 = document.querySelector('#menu-item4');

menuIcon.addEventListener('click', () => {
  navbarMobile.classList.toggle('change');
});

menuItem1.addEventListener('click', () => {
    navbarMobile.classList.toggle('change');
  });
  
  menuItem2.addEventListener('click', () => {
    navbarMobile.classList.toggle('change');
  });
  
  menuItem3.addEventListener('click', () => {
    navbarMobile.classList.toggle('change');
  });

  menuItem4.addEventListener('click', () => {
    navbarMobile.classList.toggle('change');
  });
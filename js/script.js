const menuIcon = document.querySelector('.hamburguer-menu');
const navbarMobile = document.querySelector('.navbar-mobile');
// #################### DESKTOP ##################################
const modal2 = document.querySelector('#desktopSimpleModal');
const seeProject = document.querySelectorAll('.seeproject');
const deskCloseBtn = document.querySelector('.deskCloseBtn');

// ******************** NEW PART **********************************

const openPopupButtons = document.querySelectorAll('.seeproject');


// ********************* END PART ********************************

// #################### MOBILE ###################################

const modal = document.querySelector('#simpleModal');
const btnseethis = document.querySelector('.btnseethis');
const closeBtn = document.querySelector('.closeBtn');
// ################# CLOSE POP UP MENU ###########################
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

// ********************* NEW PART ********************************

const projects = [
  {
    name: 'First project',
    title: 'Project name goes here',
    image: 'images/Group-105.svg',
    technologies: ['HTML/CSS', 'Ruby and Rails', 'JavaScript'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'First project',
    title: 'Project name goes here',
    image: 'images/Group-105.svg',
    technologies: ['HTML/CSS', 'Ruby and Rails', '+1'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveLink: '#',
    sourceLink: '#',
  },
];
// ********************* END PART *********************************
const divProject = document.createElement('div');

function addEvents() {
  for (let i = 0; i < openPopupButtons.length; i += 1) {
    openPopupButtons[i].addEventListener('click', (ev) => {
      const projectId = ev.target.id;
      divProject.classList.add('popup-overlay-objects');
      document.querySelector('.popup-bg').style.display = 'flex';
      let techsHTML = '';
      for (let k = 0; k < projects[i].technologies.length; k += 1) {
        techsHTML += `<li><p>${projects[i].technologies[k]}</p></li>`;
      }
      divProject.innerHTML = '<div class="close-btn">+</div>'
      + `<div class="modal-content">`
      + `<div class="modal-content-white">`
      + `<h1 class="modal-title">${projects[projectId].title}</h1>`
      + `<ul class="modal-language">${techsHTML}</ul>`
      + `<div class="content d-flex flex-dir-col">`
      + `<div class="content-image">`
      + `<img src="${projects[projectId].image}" alt="modal-image" />`
      + `</div>`
      + `<div class="body d-flex flex-dir-col">`
      + `<div class="paragraph-modal">`
      + `<p>${projects[projectId].description}</p>`
      + `<div class="d-flex pop-buttons">`
      + `<button class="btn-primary btn-pop d-flex" type="button">`
      + `See Live <i class="fa fa-clock-o"></i></button>`
      + `<div class="d-flex pop-buttons">`
      + `<button class="btn-secondary btn-pop d-flex" type="button">`
      + `See Source <i class="fa fa-github"></i></button>`
      + `</div>`
      + `</div>`
      + `</div>`
      + `</div>`
      + `</div>`
      + `</div>`
      + `</div>`;
  
    document.getElementById('overlay').appendChild(divProject);
  
    const deleteDetail = document.querySelector('.close-btn');
    deleteDetail.addEventListener('click', () => {
      divProject.remove();
      document.querySelector('.popup-bg').style.display = 'none';
      });
    });
    }
}

addEvents();

seeProject.addEventListener('click', () => {
  modal2.style.display = 'block';
});

deskCloseBtn.addEventListener('click', () => {
  modal2.style.display = 'none';
});

btnseethis.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
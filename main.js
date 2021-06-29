const mainMenu = document.querySelector('.nav-menu');
const menu = document.querySelector('.menu-icon');
const icon = document.querySelector('.icon')


let isOpen = false;
menu.addEventListener('click' ,() => {
  if(!isOpen) {
    
    icon.classList.add('fa-times')
    mainMenu.classList.add('nav__active')
    isOpen = true;

  }
  else{
    icon.classList.remove('fa-times');
    mainMenu.classList.remove('nav__active')
    isOpen = false;
  }

})
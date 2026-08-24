const navMain = document.querySelector('.header__menu');
const navToggle = document.querySelector('.header__button');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__menu--closed')) {
    navMain.classList.remove('header__menu--closed');
    navMain.classList.add('header__menu--opened');
  } else {
    navMain.classList.add('header__menu--closed');
    navMain.classList.remove('header__menu--opened');
  }
});

const navMain = document.querySelector('[data-js-menu]');
const navToggle = document.querySelector('[data-js-toggle]');

navToggle.addEventListener('click', () => {
  if (navMain.dataset.state === 'closed') {
    navMain.dataset.state = 'opened';
  } else {
    navMain.dataset.state = 'closed';
  }
});

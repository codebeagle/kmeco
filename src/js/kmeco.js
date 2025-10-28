window.onload = function() {
  const menuToggle = document.querySelector('#js-menu-toggle');
  const mobileMenu = document.querySelector('#js-mobile-menu');
  const menuOpen = document.querySelector('#js-menu-open');
  const menuClose = document.querySelector('#js-menu-close');
  console.log(menuToggle);

  function toggleMenu() {
    console.log('working');
    mobileMenu.classList.toggle('hidden')
    menuOpen.classList.toggle('hidden!');
    menuClose.classList.toggle('hidden!');
  }

  menuToggle.addEventListener('click', toggleMenu);
}
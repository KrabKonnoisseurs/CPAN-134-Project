const menuToggle = document.querySelector('.menu-toggle');
const collapseBar = document.querySelector('.collapse-bar');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function () {
  collapseBar.classList.toggle('is-active');
  menuToggle.classList.toggle('is-active');
  if (collapseBar.classList.contains('is-active')) {
    collapseBar.classList.add('is-sticky');
    navbar.classList.add('no-shadow');
    document.body.classList.add('blur-active');
    
  } else {
    collapseBar.classList.remove('is-sticky');
    navbar.classList.remove('no-shadow');
    document.body.classList.remove('blur-active');
  }
});



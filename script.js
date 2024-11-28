const menuToggle = document.querySelector('.menu-toggle');
const collapseBar = document.querySelector('.collapse-bar');
const navbar = document.getElementById('navbar');
const blurContent = document.querySelector('.blur-content')
const footer = document.querySelector('.footer')


menuToggle.addEventListener('click', function () {
  collapseBar.classList.toggle('is-active');
  menuToggle.classList.toggle('is-active');
  if (collapseBar.classList.contains('is-active')) {
    collapseBar.classList.add('is-sticky');
    navbar.classList.add('no-shadow');
    blurContent.classList.add('blur-active');
    footer.classList.add('blur-active')
  } else {
    collapseBar.classList.remove('is-sticky');
    navbar.classList.remove('no-shadow');
    blurContent.classList.remove('blur-active');
    footer.classList.remove('blur-active')
  }
});



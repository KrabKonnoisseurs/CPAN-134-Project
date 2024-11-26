const menuToggle = document.querySelector('.menu-toggle');
const collapseBar = document.querySelector('.collapse-bar');

menuToggle.addEventListener('click', function () {
  collapseBar.classList.toggle('is-active');
  menuToggle.classList.toggle('is-active');
  if (collapseBar.classList.contains('is-active')) {
    collapseBar.classList.add('is-sticky');
  } else {
    collapseBar.classList.remove('is-sticky');
  }
});

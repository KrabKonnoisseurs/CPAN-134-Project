const menuToggle = document.querySelector('.menu-toggle');
const collapseBar = document.querySelector('.collapse-bar');
const navbar = document.getElementById('navbar');
const blurContent = document.querySelector('.blur-content');
const footer = document.querySelector('.footer');

menuToggle.addEventListener('click', function () {
  collapseBar.classList.toggle('is-active');
  menuToggle.classList.toggle('is-active');
  if (collapseBar.classList.contains('is-active')) {
    collapseBar.classList.add('is-sticky');
    navbar.classList.add('no-shadow');
    blurContent.classList.add('blur-active');
    footer.classList.add('blur-active');
  } else {
    collapseBar.classList.remove('is-sticky');
    navbar.classList.remove('no-shadow');
    blurContent.classList.remove('blur-active');
    footer.classList.remove('blur-active');
  }
});

const calorieSlider = document.getElementById('calorieRange');
const calorieValue = document.getElementById('calorieValue');
const krustyMainCount = document.getElementById('krustyMainCount');
const krustySidesCount = document.getElementById('krustySidesCount');
const drinksCount = document.getElementById('drinksCount');

function filterMenuItems(menuListId, counterElement) {
  const items = document.querySelectorAll(`#${menuListId} tr`);
  let visibleCount = 0;
  items.forEach(item => {
    const calories = parseInt(item.getAttribute('data-calories'));
    if (calories <= calorieSlider.value) {
      item.style.display = '';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });
  counterElement.textContent = visibleCount;
}

calorieSlider.addEventListener('input', () => {
  calorieValue.textContent = calorieSlider.value; 
  filterMenuItems('krustyBurgersList', krustyMainCount);
  filterMenuItems('krustySidesList', krustySidesCount);
  filterMenuItems('drinksList', drinksCount);
});

calorieSlider.dispatchEvent(new Event('input'));

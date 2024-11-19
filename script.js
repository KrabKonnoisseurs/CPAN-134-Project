const menu_toggle = document.querySelector(".menu-toggle");
const collapse = document.querySelector(".collapse-bar");

menu_toggle.addEventListener("click", () => {
  menu_toggle.classList.toggle("is-active");
  collapse.classList.toggle("is-active");
});

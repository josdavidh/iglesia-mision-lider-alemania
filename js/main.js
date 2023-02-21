// document.querySelector(".menu-btn").addEventListener("click", () => {
//     document.querySelector(".nav-main").classList.toggle("show");
//   });

window.addEventListener('scroll', function () {
  document.querySelector(".nav-main").classList.toggle("scroll", this.window.scrollY > 80);
  console.log("Scroll");
});

// Menu desplegable
var menu = document.getElementById('menu-btn');
var navBar = document.querySelector('.nav-bar');
var navItems = document.querySelectorAll('.nav-bar a')

menu.addEventListener("click", () => {
  navBar.classList.toggle("show");
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
  navBar.classList.toggle("show")});
});

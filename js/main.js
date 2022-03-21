document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-main").classList.toggle("show");
  });

let navItems = document.querySelectorAll(".nav-main ul li a");
  
navItems.forEach(item => {
  item.addEventListener("click", () => {
    console.log("hola")
    document.querySelector(".nav-main").classList.toggle("show")});
});


document.addEventListener("DOMContentLoaded", function() {
  
  const glider = new Glider(document.querySelector('.carousel-lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel-indicador",
    scrollLockDelay: 250,
    arrows: {
        prev: ".carousel-anterior",
        next: ".carousel-siguiente",
    },
  });
  
  function sliderAuto(slider, miliseconds) {
    console.log('slider')
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 1;
  
    function slide() {
        slideTimeout = setTimeout(function () {
            if (nextIndex >= slidesCount) {
                nextIndex = 0;
            }
            slider.scrollItem(nextIndex++);
        }, miliseconds);
    }
  
    slider.ele.addEventListener("glider-animated", function () {
        window.clearInterval(slideTimeout);
        slide();
    });
  
    slide();
  }
  
  sliderAuto(glider, 3000);
  
  
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

});
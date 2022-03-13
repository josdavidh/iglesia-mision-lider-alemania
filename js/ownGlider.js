window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel-list"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel-indicators",
    arrows: {
      prev: ".carousel-previous",
      next: ".carousel-next",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 800,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

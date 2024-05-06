$(function () {
  $(".slider-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".carusel__text-slider",
  });
  $(".carusel__text-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-image",

    nextArrow:
      '<button class="slick-arrow slick-next"><img src="../images/arrow-prev.svg" alt=""></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="../images/arrow-next.svg" alt=""></button>',
  });
});

$(document).ready(function () {

  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.hero__arrow--l'),
    nextArrow: $('.hero__arrow--r')
  });
});
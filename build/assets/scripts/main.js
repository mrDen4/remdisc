$(document).ready(function () {

  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.hero__arrow--l'),
    nextArrow: $('.hero__arrow--r')
  });

  $('.works__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.works__arrow--l'),
    nextArrow: $('.works__arrow--r')
  });
});
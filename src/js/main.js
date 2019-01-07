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

  $('.top__btn, .bottom__btn').on('click', function () {
    $('.bg').toggleClass('bg--active');
    $('.popup').toggleClass('popup--active');
  });

  $('.bg').on('click', function () {
    $('.bg').toggleClass('bg--active');
    $('.popup').toggleClass('popup--active');
  });

  $('.popup__exit').on('click', function () {
    $('.bg').toggleClass('bg--active');
    $('.popup').toggleClass('popup--active');
  });

  $('.bottom__burger').on('click', function () {
    $('.popup-menu').toggleClass('popup-menu--active');
  });

  $('.popup-menu__exit').on('click', function () {
    $('.popup-menu').toggleClass('popup-menu--active');
  });
});
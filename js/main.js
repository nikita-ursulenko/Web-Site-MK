//-------------Слайдер в начале
var mySwiper = new Swiper('.slider-Nav', {
  slidesPerView: 1,
  // Optional parameters
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})
//----------------Слайдер фотографий о нас
var mySwiper = new Swiper ( '.slider-About', {
  slidesPerView: 1,
  // Optional parameters
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.next_nav-About',
    prevEl: '.prev_nav-About',
  },

})
//------------------Слайдер отзывы
var mySwiper = new Swiper ( '.slider-report', {
  slidesPerView: 2,
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
      el: '.pagination-report',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.prev-report',
    prevEl: '.next-report',
  },

})
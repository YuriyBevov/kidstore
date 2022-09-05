import Swiper, { Navigation, Pagination } from 'swiper';

const mainSliders = document.querySelectorAll('.main-slider');

if(mainSliders) {
  mainSliders.forEach(slider => {
    new Swiper(slider, {
      modules: [Navigation, Pagination],

      slidesPerView: 'auto',
      spaceBetween: 30,
      preloadImages: true,

      navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
      },
    });
  });
};

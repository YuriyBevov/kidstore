import Swiper, { Navigation, Pagination } from 'swiper';

const mainSliders = document.querySelectorAll('.main-slider');

if(mainSliders) {
  mainSliders.forEach(slider => {
    let btnNext = slider.closest('.slider-section').querySelector('.main-slider-button-next');
    let btnPrev = slider.closest('.slider-section').querySelector('.main-slider-button-prev');
    let pagination = slider.parentNode.querySelector('.main-slider-pagination');
    let isReviewSlider = slider.classList.contains('main-slider--review') ? true : false;
    new Swiper(slider, {
      modules: [Navigation, Pagination],

      slidesPerView: isReviewSlider ? 'auto' : 5,
      spaceBetween: 30,
      preloadImages: true,
      slidesOffsetAfter: isReviewSlider ? 172 : null,
      slidesOffsetBefore: isReviewSlider ? 172 : null,

      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },

      pagination: {
        el: pagination ? '.main-slider-pagination' : null,
        type: 'bullets',
        dynamicBullets: true,
        dynamicMainBullets: 5,
        clickable: true
      }
    });
  });
};

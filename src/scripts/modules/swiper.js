import Swiper, { EffectFade, Navigation, Pagination } from 'swiper';

const sliders = document.querySelectorAll('.main-slider');

if(sliders) {
  sliders.forEach(slider => {
    const btnNext = slider.closest('section').querySelector('.main-slider-button-next');
    const btnPrev = slider.closest('section').querySelector('.main-slider-button-prev');

    const pagination = slider.parentNode.querySelector('.main-slider-pagination');
    const isReviewSlider = slider.classList.contains('main-slider--review') ? true : false;
    const isIntroSlider = slider.classList.contains('main-slider--intro') ? true : false;

    new Swiper(slider, {
      modules: [EffectFade, Navigation, Pagination],

      slidesPerView: isReviewSlider ? 'auto' : isIntroSlider ? '1' : 5,
      spaceBetween: !isIntroSlider ? 30 : 0,
      preloadImages: true,
      slidesOffsetAfter: isReviewSlider ? 172 : null,
      slidesOffsetBefore: isReviewSlider ? 172 : null,

      effect: isIntroSlider ? 'fade' : null,
      fadeEffect: { crossFade: true },
      virtualTranslate: isIntroSlider ? true : false,

      navigation: {
        nextEl: btnNext ? btnNext : null,
        prevEl: btnPrev ? btnPrev : null,
      },

      pagination: {
        el: pagination ? pagination : null,
        type: 'bullets',
        dynamicBullets: true,
        dynamicMainBullets: 5,
        clickable: true
      }
    });
  });
};

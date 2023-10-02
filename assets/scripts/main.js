import "./utils/headerTitle";
import "./utils/scrollTo";
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

const swiper = new Swiper('.js-slider', {
    modules: [Pagination, Navigation],
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

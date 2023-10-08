import "./utils/headerTitle";
import "./utils/scrollTo";
// import Swiper from 'swiper';
// import { Pagination, Navigation } from 'swiper/modules';

// const swiper = new Swiper('.js-slider', {
//     modules: [Pagination, Navigation],
//     direction: 'vertical',
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//       },
//     slidesPerView: 1,
//     spaceBetween: 0,
//     mousewheel: true,
//     parallax: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })


const sliderContainer = document.querySelector('.js-slider-wrapper');
const leftSlide = document.querySelector('.js-slide-left');
const rightSlide = document.querySelector('.js-slide-right');
const buttonUp = document.querySelector('.js-button-up');
const buttonDown = document.querySelector('.js-button-down');
const slidesLength = rightSlide.children.length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => changeSlide('up'))
buttonDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight  = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

import "./utils/heroAnimation";
import "./utils/animationOnScroll";


const sliderContainer = document.querySelector('.js-slider-wrapper');
const leftSlide = document.querySelector('.js-slide-left');
const rightSlide = document.querySelector('.js-slide-right');
const buttonUp = document.querySelector('.js-button-up');
const buttonDown = document.querySelector('.js-button-down');
const slidesLength = rightSlide.children.length;
console.log(slidesLength)
const slidesImgs = document.querySelectorAll('.l-slider__slide-img');

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => changeSlide('up'))
buttonDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {

    const sliderHeight  = sliderContainer.clientHeight

    slidesImgs.forEach(element => {
        element.classList.remove('active')
    });

    if(direction === 'up'){

        activeSlideIndex++

        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
        slidesImgs[activeSlideIndex].classList.add('active')

    }else if(direction === 'down'){

        activeSlideIndex--

        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }

        slidesImgs[activeSlideIndex].classList.add('active')

    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

import "./utils/heroAnimation";
import "./utils/animationOnScroll";
import "./utils/parallax";


const sliderContainer = document.querySelector('.js-slider-wrapper');
const leftSlide = document.querySelector('.js-slide-left');
const rightSlide = document.querySelector('.js-slide-right');
const buttonUp = document.querySelector('.js-button-up');
const buttonDown = document.querySelector('.js-button-down');
let slidesLength;
if(rightSlide){
 slidesLength = rightSlide.children.length;
}
const slidesImgs = document.querySelectorAll('.l-slider__slide-img');

let activeSlideIndex = 0;
if(rightSlide){
    leftSlide.style.top = `-${activeSlideIndex * 100}vh`;
}

if(buttonUp) {
    buttonUp.addEventListener('click', () => changeSlide('up'))
}
if(buttonDown) {
    buttonDown.addEventListener('click', () => changeSlide('down'))
}

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


// scroll circles
const circle1 = document.querySelector('.c-scroll__circle-1');
const circle2 = document.querySelector('.c-scroll__circle-2');

if(circle1 && circle2) {
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        circle1.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 0 0)`;
        circle2.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 100% 100%)`;
 });
}

// bg on scroll 
const pattern = document.querySelector('.bg');
if(pattern){
    window.addEventListener('scroll', () => {
        pattern.style.backgroundPosition = window.scrollY + 'px';
    });
}
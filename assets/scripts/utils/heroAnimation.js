let headerTitleEls = document.querySelectorAll('.c-hero__title')
let menuEl = document.querySelector('.c-hero__menu')

document.addEventListener('DOMContentLoaded', function () {
  if(headerTitleEls) {
    headerTitleEls.forEach(element => {
      element.classList.add('is-loaded')
    });
  }

  if(menuEl) {
    menuEl.classList.add('is-loaded')
  }
})
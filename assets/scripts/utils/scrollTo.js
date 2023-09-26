const downEl = document.querySelector('.c-hero__icon-up');

downEl.addEventListener('click', () => {
    const el = document.querySelector('.c-hero');
    const elOffset = el.getBoundingClientRect().bottom + window.scrollY;
    scrollTo({
        top: elOffset,
        behavior: 'smooth'
    });
    
});
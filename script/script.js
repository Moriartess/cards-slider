const slides = document.querySelectorAll('.slider');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('main-slide');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('main-slide');
    })
}
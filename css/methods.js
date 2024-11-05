const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let index = 0;

next.addEventListener('click', () => {
    if (index >= images.length - 1) index = -1;
    index++;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
});

prev.addEventListener('click', () => {
    if (index <= 0) index = images.length;
    index--;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
});

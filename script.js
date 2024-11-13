// Simple image slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slides img');

function changeSlide() {
  slides[currentSlide].style.transform = 'translateX(-200%)';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.transform = 'translateX(0)';
}

setInterval(changeSlide, 1000);
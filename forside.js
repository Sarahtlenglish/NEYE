// Hent slideshow-container, slide-elementerne og slide-indikator-containeren
const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
const slideIndicatorsContainer = document.querySelector('.slide-indicators');

let currentSlide = 0;

// Funktion til at skifte til næste slide
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  slideIndicators[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
  slideIndicators[currentSlide].classList.add('active');
}

// Opret slide-indikatorer baseret på antallet af slides
const slideIndicators = [];
for (let i = 0; i < slides.length; i++) {
  const slideIndicator = document.createElement('div');
  slideIndicator.classList.add('slide-indicator');
  if (i === 0) {
    slideIndicator.classList.add('active');
  }
  slideIndicator.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    slideIndicators[currentSlide].classList.remove('active');
    currentSlide = i;
    slides[currentSlide].classList.add('active');
    slideIndicators[currentSlide].classList.add('active');
  });
  slideIndicators.push(slideIndicator);
  slideIndicatorsContainer.appendChild(slideIndicator);
}

// Start slideshow
slides[currentSlide].classList.add('active');
setInterval(nextSlide, 3000); // Skift slide hver 3. sekund

const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');

let currentIndex = 0;
updateCarousel();

carousel.querySelector('.prev').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  } 
  updateCarousel(); 
  setTimeout(updateCarousel, 5000);
});

carousel.querySelector('.next').addEventListener('click', () => { 
currentIndex++; 
if (currentIndex > images.length - 1) {
 currentIndex = 0; 
} 
  updateCarousel(); 
  setTimeout(updateCarousel, 5000);
});

function updateCarousel() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  })
  currentIndex++
  if(currentIndex > images.length - 1) {currentIndex = 0}
  setTimeout(updateCarousel, 5000);
}
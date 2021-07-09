let slideIndex = 1;

document
  .querySelector(".carousel-control_prev")
  .addEventListener("click", () => showSlides(-1));
document
  .querySelector(".carousel-control_next")
  .addEventListener("click", () => showSlides(1));

function showSlides(n) {
  slideIndex += n;

  const slides = document.getElementsByClassName("carousel-item");
  const slidesLength = slides.length;
  
  if (slideIndex > slidesLength) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slidesLength;
  }
  const currentSlide = document.getElementsByClassName("carousel-item active");
  if (currentSlide.length) {
    currentSlide[0].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}

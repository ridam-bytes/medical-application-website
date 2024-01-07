import React from 'react';

let currentIndex = 0;
let carouselWrapper;
let banner_count = 2;

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + '%';
  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${newTransformValue})`;
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % banner_count;
  updateCarousel();
}

const Carousel = () => {
  updateCarousel();
  setInterval(nextSlide, 4000);
  return (
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="banner">
        <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div class="banner">
        <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", height: "500px"}}
          />
        </div>
      </div>
      {/* <div class="dots-container">
          <span
            class={`dot ${index === currentIndex ? 'selected' : 'not-selected'}`}
            on:click={() => {
              currentIndex = index;
              stopAutoSlide();
              updateCarousel();
            }}
            ></span>
      </div> */}
    </div>
  );
};

export default Carousel;

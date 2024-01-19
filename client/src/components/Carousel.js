import React, { useEffect } from 'react';

let currentIndex = 0;
let banner_count = 2;

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + '%';
  const carouselWrapper = document.querySelector('.carousel-wrapper');

  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${newTransformValue})`;
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % banner_count;
  updateCarousel();
}

const Carousel = () => {
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="banner">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
        <div className="banner">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>
      <div className="dots-container">
        {Array(banner_count).fill(null).map((_, index) => (
          <span
            className={`dot ${index === currentIndex ? 'selected' : 'not-selected'}`}
            onClick={() => {
              currentIndex = index;
              updateCarousel();
            }}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

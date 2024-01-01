import React, { useState } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.index * -100}%);
`;

const Carousel2 = () => {
  const images = [
    '/images/contactus.jpeg',
    '/images/about.jpeg'
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`slide ${index}`}
          index={index}
          style={{ transform: `translateX(${index * 100}%)` }}
        />
      ))}
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </ImageContainer>
  );
};

export default Carousel2;

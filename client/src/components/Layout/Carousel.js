import * as React from "react";
import styled, { css } from "styled-components";

const SCarouselSlide = styled.div`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;


const SCarouselSlides = styled.div`
  display: flex;
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;



const Carousel = () => {


  const children = [
    <div>
      <img width = '100%' height='50%' src="/images/contactus.jpeg" alt="Image Description"/>
    </div>,
    <div>
    <img width = '100%' src="/images/about.jpeg" alt="Image Description"/>
  </div>
  ]
  // const children = [
  //   "/images/contactus.jpeg",
  //   "/images/contactus.jpeg"
  // ]
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <div class = 'carousel'>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      <button
        onClick={() => {
          setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          setCurrentSlide((currentSlide + 1) % activeSlide.length);
        }}
      >
        Right
      </button>
    </div>
  );
};

export default Carousel;
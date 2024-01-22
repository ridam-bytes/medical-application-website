import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Banner() {
  return (
    <section className="lg:mt-0 banner mt-[70px] home-slider">
      <Swiper
        spaceBetween={8}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        modules={[Autoplay, Pagination, Navigation]}
        pagination={true}
        navigation={{
          prevEl: ".carousel-prev-btn",
          nextEl: ".carousel-next-btn",
        }}
        className="min-h-[400px] banner-height relative"
      >
        <SwiperSlide className="h-full bg-black  w-full">
          <Slide
            mobileImage="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            desktopImage="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slider image alt tag"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            mobileImage="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            desktopImage="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slider image alt tag"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            mobileImage="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            desktopImage="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slider image alt tag"
          />
        </SwiperSlide>
        <div className="absolute left-0 top-0 right-0 z-10 bottom-0  w-14 md:w-20 lg:w-24 grid place-content-center">
          <button
            type="button"
            className="place-content-center cursor-pointer h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 rounded-full  hover:bg-green hover:bg-opacity-30 backdrop-blur-sm border-[1px] carousel-prev-btn  border-solid border-white  border-opacity-10 stroke-white hover:stroke-green focus-visible:bg-green focus-visible:stroke-green outline-none transition-all grid "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="inherit"
              className="w-4 md:w-6 rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute left-auto top-0 right-0 z-10 bottom-0  w-14 md:w-20 lg:w-24 grid place-content-center">
          <button
            type="button"
            className="place-content-center cursor-pointer h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 rounded-full  hover:bg-green hover:bg-opacity-30 backdrop-blur-sm border-[1px] border-solid border-white  border-opacity-10 stroke-white hover:stroke-green carousel-next-btn focus-visible:bg-green focus-visible:stroke-green outline-none transition-all grid "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="inherit"
              className="w-4 md:w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </Swiper>
    </section>
  );
}

function Slide({ desktopImage, mobileImage, alt }) {
  const breakPoint = 768;

  return (
    <div className="h-full w-full swiper-slide-bg">
      <picture className="h-full w-full ">
        <source
          media={`(max-width: ${breakPoint}px)`}
          srcSet={mobileImage}
          className="h-full objec w-full"
        />
        <img
          className="h-full object-cover  w-full"
          src={desktopImage}
          alt={alt}
        />
      </picture>
    </div>
  );
}

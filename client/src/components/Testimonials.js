import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonials() {
  return (
    <div className="bg-[#ececec] blade-top-padding-lg blade-bottom-padding-lg">
      <div className="grid bblade-top-padding-lg text-center w-container">
        <h2 className="font-semibold md:mb-2 pb-2 leading-normal from-neutral-400 bg-gradient-to-br bg-clip-text text-transparent to-neutral-800 text-3xl md:text-4xl lg:text-5xl">
          Our work speaks for us
        </h2>
        <div class="flex items-center gap-2  mt-2 justify-center max-w-[300px] mx-auto md:w-11/12 px-3 pb-3 md:pb-7 lg:pb-10">
          <div class="flex-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M17.618 14.7474C17.0167 15.3761 16.0415 15.3761 15.4401 14.7474L12.7851 11.9715C12.1836 11.3428 12.1836 10.3234 12.7851 9.69468L15.4401 6.91888C16.0415 6.29013 17.0167 6.29013 17.618 6.91888L20.2732 9.69467C20.8746 10.3234 20.8746 11.3428 20.2732 11.9715L17.618 14.7474ZM5.28406 14.7474C4.68265 15.3761 3.70757 15.3761 3.10617 14.7474L0.451056 11.9715C-0.150351 11.3428 -0.150352 10.3234 0.451055 9.69468L3.10617 6.91888C3.70757 6.29013 4.68265 6.29013 5.28406 6.91888L7.93917 9.69467C8.54057 10.3234 8.54057 11.3428 7.93917 11.9715L5.28406 14.7474ZM11.4511 21.1946C10.8496 21.8234 9.87458 21.8234 9.27316 21.1946L6.61805 18.4189C6.01665 17.7902 6.01665 16.7707 6.61805 16.142L9.27316 13.3662C9.87458 12.7374 10.8496 12.7374 11.4511 13.3662L14.1062 16.142C14.7075 16.7707 14.7075 17.7902 14.1062 18.4189L11.4511 21.1946ZM11.4511 8.30004C10.8496 8.92878 9.87458 8.92879 9.27316 8.30004L6.61805 5.52424C6.01665 4.8955 6.01665 3.8761 6.61805 3.24735L9.27316 0.471559C9.87458 -0.157185 10.8496 -0.157187 11.4511 0.471558L14.1062 3.24735C14.7075 3.8761 14.7075 4.8955 14.1062 5.52424L11.4511 8.30004Z"
                fill="url(#paint0_radial_978_435)"
              ></path>
              <defs>
                <radialGradient
                  id="paint0_radial_978_435"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(10.3621 10.8331) rotate(90) scale(10.8331 10.3621)"
                >
                  <stop stop-color="#444444"></stop>
                  <stop offset="1" stop-color="#444444" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-auto w-full object-contain"
              viewBox="0 0 464 2"
              fill="none"
            >
              <path
                d="M0.451172 0.821289H463.258"
                stroke="url(#paint0_linear_978_434)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_978_434"
                  x1="473.005"
                  y1="1.81805"
                  x2="-8.77562"
                  y2="1.81805"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8C8C8C" stop-opacity="0"></stop>
                  <stop offset="0.514298" stop-color="#444444"></stop>
                  <stop offset="1" stop-color="#444444" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="flex-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M17.618 14.7474C17.0167 15.3761 16.0415 15.3761 15.4401 14.7474L12.7851 11.9715C12.1836 11.3428 12.1836 10.3234 12.7851 9.69468L15.4401 6.91888C16.0415 6.29013 17.0167 6.29013 17.618 6.91888L20.2732 9.69467C20.8746 10.3234 20.8746 11.3428 20.2732 11.9715L17.618 14.7474ZM5.28406 14.7474C4.68265 15.3761 3.70757 15.3761 3.10617 14.7474L0.451056 11.9715C-0.150351 11.3428 -0.150352 10.3234 0.451055 9.69468L3.10617 6.91888C3.70757 6.29013 4.68265 6.29013 5.28406 6.91888L7.93917 9.69467C8.54057 10.3234 8.54057 11.3428 7.93917 11.9715L5.28406 14.7474ZM11.4511 21.1946C10.8496 21.8234 9.87458 21.8234 9.27316 21.1946L6.61805 18.4189C6.01665 17.7902 6.01665 16.7707 6.61805 16.142L9.27316 13.3662C9.87458 12.7374 10.8496 12.7374 11.4511 13.3662L14.1062 16.142C14.7075 16.7707 14.7075 17.7902 14.1062 18.4189L11.4511 21.1946ZM11.4511 8.30004C10.8496 8.92878 9.87458 8.92879 9.27316 8.30004L6.61805 5.52424C6.01665 4.8955 6.01665 3.8761 6.61805 3.24735L9.27316 0.471559C9.87458 -0.157185 10.8496 -0.157187 11.4511 0.471558L14.1062 3.24735C14.7075 3.8761 14.7075 4.8955 14.1062 5.52424L11.4511 8.30004Z"
                fill="url(#paint0_radial_978_435)"
              ></path>
              <defs>
                <radialGradient
                  id="paint0_radial_978_435"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(10.3621 10.8331) rotate(90) scale(10.8331 10.3621)"
                >
                  <stop stop-color="#444444"></stop>
                  <stop offset="1" stop-color="#444444" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex py-4 md:p-7 lg:p-9 testimonial-wrapper px-3 lg:px-0">
        <Swiper
          spaceBetween={8}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          autoHeight
          modules={[Pagination, Navigation]}
          pagination={{
            el: ".swiper-pagination-wrapper",
          }}
          navigation={{
            prevEl: ".testimonial-prev-btn",
            nextEl: ".testimonial-next-btn",
          }}
          className=" relative"
        >
          <SwiperSlide>
            <div className="flex-1">
              <div className="pt-4">
                <h6 className="font-normal text-base  md:text-lg lg:text-xl xl:text-xl leading-normal md:px-6 xl:px-10 mx-auto max-w-3xl 2xl:max-w-4xl text-center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </h6>
              </div>
              <div className="pt-6 md:pt-8 xl:pt-10 grid gap-1 place-content-center text-center">
                <h6 className="font-semibold">Amit Singh </h6>
                <div className="text-dark">Senior Doctor, Delhi</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-1">
              <div className="pt-4">
                <h6 className="font-normal text-base  md:text-lg lg:text-xl xl:text-xl leading-normal md:px-6 xl:px-10 mx-auto max-w-3xl 2xl:max-w-4xl text-center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </h6>
              </div>
              <div className="pt-6 md:pt-8 xl:pt-10 grid gap-1 place-content-center text-center">
                <h6 className="font-semibold">Amit Singh </h6>
                <div className="text-dark">Senior Doctor, Delhi</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-1">
              <div className="pt-4">
                <h6 className="font-normal text-base  md:text-lg lg:text-xl xl:text-xl leading-normal md:px-6 xl:px-10 mx-auto max-w-3xl 2xl:max-w-4xl text-center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </h6>
              </div>
              <div className="pt-6 md:pt-8 xl:pt-10 grid gap-1 place-content-center text-center">
                <h6 className="font-semibold">Amit Singh </h6>
                <div className="text-dark">Senior Doctor, Delhi</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-1">
              <div className="pt-4">
                <h6 className="font-normal text-base  md:text-lg lg:text-xl xl:text-xl leading-normal md:px-6 xl:px-10 mx-auto max-w-3xl 2xl:max-w-4xl text-center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                </h6>
              </div>
              <div className="pt-6 md:pt-8 xl:pt-10 grid gap-1 place-content-center text-center">
                <h6 className="font-semibold">Amit Singh </h6>
                <div className="text-dark">Senior Doctor, Delhi</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-pagination-wrapper pb-3 justify-center mx-auto flex"></div>
      <section className="px-9 mt-1 grid place-content-center">
        <div className=" p-[4px] flex gap-4 md:gap-8 items-center rounded-full border-[1px] border-solid border-neutral-400">
          <button
            aria-label="Slide to previous testimonial"
            type="button"
            className=" testimonial-prev-btn disabled:opacity-30 disabled:cursor-not-allowed p-2 stroke-green hover:fill-green hover:stroke-green rounded-full focus-visible:fill-green focus-visible:stroke-green focus-visible:bg-neutral-200  hover:bg-neutral-200 transition-colors duration-300 outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="inherit"
              className="w-5 h-5 2xl:w-6 2xl:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
          </button>
          <div className="font-regular md:hidden">1/4</div>
          <button
            aria-label="Slide to next testimonial"
            className=" testimonial-next-btn disabled:opacity-30 disabled:cursor-not-allowed p-2 stroke-green hover:fill-green hover:stroke-green rounded-full focus-visible:fill-green focus-visible:stroke-green focus-visible:bg-neutral-200  hover:bg-neutral-200 transition-colors duration-300 outline-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="inherit"
              className="w-5 h-5 2xl:w-6 2xl:h-6 rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

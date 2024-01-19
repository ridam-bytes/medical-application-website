import React, { useState } from "react";
import { TextAnchor, Anchor } from "../Atoms/anchors";

const NavigationLink = ({ href, text }) => (
  <li>
    <TextAnchor
      color="light"
      size="small"
      className="block whitespace-nowrap"
      href={href}
      text={text}
    />
  </li>
);

// diagnostic testing
// equipment
// gloves.
// laboratory
// optometry
// orthopedic
// pharmaceutical
// physician
// surgical supplies
export default function Footer() {
  return (
    <footer className="text-white border-t-gray border-t border-opacity-10 bg-gradient-to-tr from-[#151515] from-0% via-20% to-black to-100% blade-top-padding blade-bottom-padding">
      <div className="w-container">
        <div className="flex lg:gap-20 lg:flex-row flex-col justify-between">
          <div className="flex flex-col">
            <Anchor href="/">
              <img
                src="/logo.png"
                className="h-10 md:h-16 lg:h-28"
                alt="Innogent logo"
                title="logo"
              />
            </Anchor>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-24 pr-10 lg:mt-0 mt-8">
            <ul className="flex flex-col  gap-3   list-none w-full">
              <li className="w-full block">
                <TextAnchor
                  size="base"
                  color="light"
                  href="/products"
                  text="Products"
                  className="block font-medium uppercase"
                />
              </li>
              <li className="w-full block">
                <TextAnchor
                  size="base"
                  color="light"
                  href="/contact-us"
                  text="Contact Us"
                  className="block font-medium uppercase"
                />
              </li>
              <li className="w-full block">
                <TextAnchor
                  size="base"
                  color="light"
                  href="/register"
                  text="Register"
                  className="block font-medium uppercase"
                />
              </li>
            </ul>

            <ul className=" grid gap-2 md:gap-3 text-white list-none">
              <li className="xl:text-base text-sm md:text-base  font-medium uppercase">
                Categories
              </li>

              <NavigationLink
                href="/category/diagnostic-testing"
                text="Diagnostic Testing"
              />

              <NavigationLink href="/category/equipment" text="Equipment" />

              <NavigationLink href="/category/gloves" text="Gloves" />

              <NavigationLink href="/category/laboratory" text="Laboratory" />

              <NavigationLink href="/category/optometry" text="Optometry" />

              <NavigationLink href="/category/orthopedic" text="Orthopedic" />

              <NavigationLink
                href="/category/pharmaceutical"
                text="Pharmaceutical"
              />

              <NavigationLink href="/category/physician" text="Physician" />

              <NavigationLink
                href="/category/surgical-supplies"
                text="Surgical Supplies"
              />
            </ul>

            <ul className=" flex flex-col gap-2 md:gap-3 text-white list-none">
              <li className="xl:text-base  text-sm md:text-base  font-medium uppercase">
                Navigation
              </li>

              <li>
                <NavigationLink
                  href="/terms-and-conditions"
                  text="Terms & Conditions"
                />
              </li>
              <li>
                <NavigationLink href="/privacy-policy" text="Privacy Policy" />
              </li>
              <li>
                <NavigationLink href="/privacy-policy" text="Shipping Policy" />
              </li>
              <li>
                <NavigationLink href="/privacy-policy" text="Return Policy" />
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex gap-3 md:flex-row flex-col justify-between items-center blade-top-padding-lg">
          {/* <div className="flex gap-4 ">
            <TextAnchor
              color="light"
              text="Privacy Policy"
              href="/coming-soon"
            />
            <span className="opacity-60">|</span>
            <TextAnchor
              color="light"
              text="Terms and Conditions"
              href="/coming-soon"
            />
          </div> */}

          <h6 className="md:block hidden text-sm text-white whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>

          <div className="flex items-center gap-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="h-7 hover:fill-blue transition-all"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="h-7 hover:fill-blue transition-all"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 -2 20 20"
                version="1.1"
              >
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="white"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-60.000000, -7521.000000)"
                    fill="#fff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                        id="twitter-[#154]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg fill="#fff" height="24px" width="24px" viewBox="0 0 220 220">
                <path
                  d="M110,0C49.249,0,0,49.247,0,110s49.249,110,110,110s110-49.247,110-110S170.75,0,110,0z M137.625,110
	c0,27.604-22.457,50.061-50.061,50.061c-27.604,0-50.061-22.457-50.061-50.061S59.96,59.939,87.564,59.939
	c11.137,0,21.688,3.585,30.512,10.368l-11.623,15.119c-5.461-4.198-11.993-6.417-18.889-6.417c-17.088,0-30.99,13.902-30.99,30.99
	s13.902,30.99,30.99,30.99c13.763,0,25.459-9.018,29.49-21.455h-29.49v-19.07h50.061V110z M190.33,116.234h-14.34v14.342h-12.47
	v-14.342h-14.334v-12.469h14.334V89.424h12.47v14.342h14.34V116.234z"
                />
              </svg>
            </a>
          </div>

          <h6 className="md:hidden block text-sm text-white whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}

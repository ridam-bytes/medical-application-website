import React, { useState } from "react";
import { TextAnchor, Anchor } from "../Atoms/anchors";

export default function Footer() {
  return (
    <footer className="text-white border-t-gray border-t border-opacity-10 bg-gradient-to-tr from-[#151515] from-0% via-20% to-black to-100% blade-top-padding blade-bottom-padding">
      <div className="w-container">
        <div className="flex lg:gap-20 lg:flex-row flex-col justify-between">
          <div className="flex flex-col">
            <Anchor href="/">
              <img
                src="/logo.svg"
                className="h-10 md:h-12 xlg:h-12"
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

              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Blood pressure"
                />
              </li>
              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Old Age"
                />
              </li>
              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Hygiene"
                />
              </li>
              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Blood pressure"
                />
              </li>
            </ul>

            <ul className=" grid gap-2 md:gap-3 text-white list-none">
              <li className="xl:text-base  text-sm md:text-base  font-medium uppercase">
                Categories
              </li>

              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Blood pressure"
                />
              </li>
              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Old Age"
                />
              </li>
              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Hygiene"
                />
              </li>
              <li>
                <TextAnchor
                  color="light"
                  size="small"
                  className="block whitespace-nowrap"
                  href="/category/blood-pressure"
                  text="Blood pressure"
                />
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
          </div>

          <h6 className="md:hidden block text-sm text-white whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}

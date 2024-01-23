import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <aside
      className={` bg-neutral-100 border-r-[1px] border-solid border-neutral-300 basis-0 lg:basis-60 transition-all duration-all ease-in-out h-screen sticky top-0 overflow-y-auto `}
    >
      <div className=" grid gap-3 pt-5 pb-3  px-3 overflow-y-auto w-full ">
        <div className=" grid  overflow-hidden h-full">
          <ListElem text="Featured" href="featured" />
          <ListElem text="Recent" href="recent" />
          <ListElem text="Sale" featured chip="50% Off" href="sale" />
        </div>
        <div className=" grid mt-2  overflow-hidden border-t-[1px] border-neutral-300 border-solid h-full">
          <h6 className="text-lg font-semibold  pl-3 pt-4 pb-1">
            Suite of Categories
          </h6>
          <ListElem text="diagnostic testing" href="diagnostic-testing" />
          <ListElem text="equipment" href="equipment" />
          <ListElem text="gloves." href="gloves." />
          <ListElem text="laboratory" href="laboratory" />
          <ListElem text="optometry" href="optometry" />
          <ListElem text="orthopedic" href="orthopedic" />
          <ListElem text="pharmaceutical" href="pharmaceutical" />
          <ListElem text="physician" href="physician" />
          <ListElem text="surgical supplies" href="surgical supplies" />
        </div>
      </div>
    </aside>
  );
}

function ListElem({ text, isActive = false, featured, chip }) {
  const href = text.toLowerCase();
  return (
    <Link
      to={`/products/${href}`}
      className="flex items-center justify-between gap-2 rounded-sm  group hover:bg-neutral-200 pl-3 pr-1 py-2 transition-all duration-100 ease-in-out bg-opacity-0"
    >
      <span
        className={` text-sm font-medium capitalize  text-black transition-all duration-100 ease-in-out ${
          isActive ? "text-green " : "text-opacity-100"
        }`}
      >
        {text}
      </span>

      {featured && (
        <span class="inline-flex items-center justify-center px-[12px] py-[2px] ms-3 !text-[12px] font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-green dark:text-black">
          {chip}{" "}
        </span>
      )}
    </Link>
  );
}

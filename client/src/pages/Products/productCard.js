import React, { useState } from "react";
import { Listbox, Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data }) {
  const navigate = useNavigate();
  const {
    coverImage,
    price,
    discount,
    finalPrice,
    stock,
    incart,
    title,
    desc,
  } = data;
  const [quantity, setQuantity] = useState(0);

  const cartActions = () => {
    if (incart) navigate("/cart");
  };
  return (
    <article class="flex flex-col p-[10px] shadow-card bg-neutral-50 border-[1px] border-solid border-neutral-200 rounded-xl max-w-lg mx-auto">
      <div class="h-60 rounded-md overflow-hidden relative">
        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-[12px] py-[2px] text-center text-sm font-medium text-white">
          {discount} OFF
        </span>
        <img
          src={coverImage}
          alt={title}
          class="h-full w-full object-top object-cover"
          loading="eager"
        />
      </div>
      <div class="flex flex-col gap-2 pt-3  pb-2 px-2  justify-between flex-1">
        <div className="flex">
          <div className="flex-1">
            <span class="font text-black flex-0 text-xl flex flex-col lg:tex-xl font-semibold leading-tight line-clamp-1">
              {title}
            </span>
            <span class="text-sm font-light text-opacity-80 leading-tight flex-1 w-10/12 pt-1 block line-clamp-3">
              {desc}
            </span>
          </div>

          <div className="flex-0 pr-1 ">
            <div className="flex flex-col">
              <span class="text-xl font-bold text-green">{price}</span>
              <span class="text-[12px] text-slate-400 line-through">
                {finalPrice}
              </span>
            </div>
          </div>
        </div>

        <div class="flex justify-between flex-0 gap-3 items-end pt-4">
          <div>
            <label
              for="countries"
              class="block mb-1 text-sm font-normal text-gray-900 dark:text-neutral-800"
            >
              Quantity:
            </label>
            <select
              onChange={(event) => setQuantity(event.target.value)}
              id="quantity"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-1 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-neutral-300"
            >
              {[...Array(stock)].map((elem, index) => {
                return <option value={index + 1}>{index + 1}</option>;
              })}
            </select>
          </div>
          <button
            type="button"
            onClick={cartActions}
            className="master-btn text-white py-2 px-3 xl:px-4 xl:py-[6px] text-base md:text-sm font-medium rounded-md focus-visible:outline-green outline-transparent hover:outline-green transition-all duration-300 ease-default outline outline-[2px] outline-offset-2"
          >
            {incart ? "Add to cart" : "Go to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

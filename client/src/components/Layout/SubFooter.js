import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubFooter() {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/subscribe`,
        {
          email,
        }
      );
      setLoading(false);
      setEmail("");
      if (res.data.success) toast.success(res.data.message);
      else {
        toast.error(res.data.message);
      }
    } catch {
      setLoading(false);
      setEmail("");
      toast.error("failed to submit the form.");
    }
  };

  return (
    <section className="blade-top-padding-sm blade-bottom-padding-sm subfooter-wrapper">
      <div className="blade-top-padding place-items-center blade-bottom-padding grid place-content-center text-center">
        <span className="block pb-2 md:mb-2 text-2xl text-center md:text-3xl lg:text-4xl font-semibold px-4 leading-snug">
          KEEP IN TOUCH <br className="md:hidden block" />
          WITH AMSCO
        </span>

        <p className="font-normal text-neutral-700 leading-normal pb-px text-sm md:text-base lg:text-xl ">
          Subscribe today to stay on top of <br className="md:hidden block" />{" "}
          everything at AMSCO Medical.
        </p>
        <p className="font-normal text-neutral-700 leading-normal text-center pt-1 pb-px text-sm md:text-base  lg:text-xl ">
          Including seasonal specials, promo deals,{" "}
          <br className="md:hidden block" />
          blog updates and much more!
        </p>
        <div className="flex md:flex-row flex-col gap-3 w-full  max-w-md mt-4 md:pt-5 ">
          <input
            size="1"
            name="email"
            type="email"
            inputMode="email"
            className={` bg-green bg-opacity-5 placeholder:text-base placeholder:text-neutral-800 placeholder:font-normal tracking-wide px-3 py-2.5 text-sm lg:text-base text-neutral-800  w-full border border-solid rounded-md transition-all  !border-neutral-400 ease-in-out duration-150s focus-visible:text-neutral-900 outline-none focus-visible:outline-none`}
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            type="button"
            class="master-btn disabled:opacity-50 text-white py-2 px-4 xl:px-7 text-base md:text-base font-medium rounded-md focus-visible:outline-green outline-transparent hover:outline-green transition-all duration-300 ease-default outline outline-[2px] outline-offset-2"
          >
            {isLoading ? "Loading..." : "Subscribe"}
          </button>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useReducer } from "react";
import { Anchor, TextNavAnchor } from "../Atoms/anchors";
import MobileNavModal from "../MobileNavModal";

export default function Header() {
  const [mobileNav, toggleMobileNav] = useReducer((s) => !s, false);
  const [isModalOpen, toggleState] = useReducer((s) => !s, false);

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileNav]);
  return (
    <nav>
      <div
        className={` backdrop-blur-3xl bg-white shadow-header fixed top-0 left-0 right-0 z-[9999]`}
      >
        <header className="2xl:py-2 xlg:py-1 py-2 z-50">
          <div className="w-container h-full xlg:py-3 py-2 mt-[2px] flex gap-4 items-center justify-between m-auto">
            <Anchor href="/">
              <img
                src="/logo.svg"
                loading="eager"
                alt="logo for website"
                className=" h-6 md:h-8 w-full object-contain object-center"
              />
            </Anchor>
            <ul className="list-none gap-10 md:flex items-center hidden pb-1">
              <li>
                <TextNavAnchor
                  size="small"
                  color="dark"
                  text="Categories"
                  href="/categories"
                />
              </li>
              <li>
                <TextNavAnchor
                  size="small"
                  color="dark"
                  text="Register"
                  href="/register"
                />
              </li>
              <li>
                <TextNavAnchor
                  size="small"
                  color="dark"
                  text="Login"
                  href="/login"
                />
              </li>
            </ul>
            <button
              type="button"
              className="lg:hidden block"
              onClick={toggleState}
            >
              <svg
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-6 my-2 fill-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>
      <div
        className={`${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        } transition z-[9999] duration-500 fixed inset-0 h-screen w-screen bg-black text-white`}
      >
        <MobileNavModal toggle={toggleState} />
      </div>
    </nav>
  );
}

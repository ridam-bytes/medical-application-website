import React, { useEffect, useReducer, useRef } from "react";
import { Anchor, TextNavAnchor } from "../Atoms/anchors";
import MobileNavModal from "../MobileNavModal";
import { useNavigate } from "react-router-dom";
import { Popover, Transition as PopTransition } from "@headlessui/react";

export default function Header() {
  const [isModalOpen, toggleState] = useReducer((s) => !s, false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const categoryBtn = useRef();

  const navigate = useNavigate();

  const popNavigation = (target, popId) => {
    switch (popId) {
      case "category": {
        navigate(`/categories/${String(target).toLocaleLowerCase()}`);
        return categoryBtn.current?.click();
      }
      default: {
      }
    }
  };
  return (
    <nav>
      <div
        className={`  backdrop-blur-3xl bg-white shadow-header fixed top-0 left-0 right-0 z-[9999]`}
      >
        <header className="2xl:py-2 xlg:py-1 py-2 z-50">
          <div className="w-container h-full xlg:py-3 py-2 mt-[2px] flex gap-4 items-center justify-between m-auto">
            <Anchor href="/">
              <img
                src="/logo.png"
                loading="eager"
                alt="logo for website"
                className=" h-6 md:h-10 w-full object-contain object-center"
              />
            </Anchor>
            <ul className="list-none gap-10 md:flex items-center hidden pb-1">
              <li>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={categoryBtn}
                        className="text-base text-black flex flex-nowrap gap-1 items-center focus:outline-none  focus-visible:text-orange hover:text-orange "
                      >
                        Industries
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          className={` ${
                            open ? "rotate-180" : ""
                          } transition-all duration-300 mt-[2px] ease-in-out w-3 h-3`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Popover.Button>

                      <PopTransition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        className="absolute top-5 right-0 -left-10 md:top-10"
                      >
                        <Popover.Panel className="md:w-[28rem]  py-3 px-2 rounded-md  flex sm:grid-cols-2 grid-cols-1 gap-x-3 bg-white">
                          <div className="basis-60 flex flex-col gap-1  grow shrink   p-1 divide-y-1 divide-slate-200">
                            <PopOption
                              callback={() =>
                                popNavigation("diagnostic-testing", "category")
                              }
                              text="Diagnostic Testing"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("equipment", "category")
                              }
                              text="Equipment"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Gloves", "category")
                              }
                              text="Gloves"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Laboratory", "category")
                              }
                              text="Laboratory"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Optometry", "category")
                              }
                              text="Optometry"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Orthopedic", "category")
                              }
                              text="Orthopedic"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Pharmaceutical", "category")
                              }
                              text="Pharmaceutical"
                            />
                          </div>
                          <div className="basis-60 grow shrink  flex flex-col  p-1 divide-y-1 divide-slate-200 gap-1">
                            <PopOption
                              callback={() =>
                                popNavigation("Physician", "category")
                              }
                              text="Physician"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("surgical-supplies", "category")
                              }
                              text="Surgical Supplies"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Optometry", "category")
                              }
                              text="Optometry"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Orthopedic", "category")
                              }
                              text="Orthopedic"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Pharmaceutical", "category")
                              }
                              text="Pharmaceutical"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("Physician", "category")
                              }
                              text="Physician"
                            />
                            <PopOption
                              callback={() =>
                                popNavigation("surgical-supplies", "category")
                              }
                              text="Surgical Supplies"
                            />
                          </div>
                        </Popover.Panel>
                      </PopTransition>
                    </>
                  )}
                </Popover>
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
              <li>
                <TextNavAnchor
                  size="small"
                  color="dark"
                  text="Cart (0)"
                  href="/cart"
                />
              </li>
            </ul>
            <button
              type="button"
              className="md:hidden block"
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

function PopOption({ callback, text }) {
  return (
    <button
      type="button"
      onClick={callback}
      className=" py-1 px-1  flex flex-nowrap items-center gap-1 group font-normal  outline-none focus:outline-none hover:text-green"
    >
      <span className="group-hover:text-green group-focus:text-green transition-colors duration-200 ease-in-out">
        {text}
      </span>
    </button>
  );
}

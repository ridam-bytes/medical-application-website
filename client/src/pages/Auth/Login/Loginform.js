import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useAuthContext } from "../../../context/auth";

export default function RegitserForm() {
  const [isLoading, toggleLoading] = useState(false);
  const initalFormState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const { islogged, login, email } = useAuthContext();

  const submitHandler = async (values, { resetForm }) => {
    toggleLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        values
      );

      if (res && res.data.success) {
        login(values.email);
        toast.success("Logged in Successfully.");
        navigate("/profile");
      } else {
        toast.error("failed to login");
      }
    } catch (err) {
      toast.error("Error! Please Try Again.");
      console.log(err);
    }
    toggleLoading(false);
    resetForm();
  };

  const validator = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email Is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "This field is required.";
    }
    return errors;
  };

  const handleClick = () => {
    navigate("/profile");
  };

  if (islogged)
    return (
      <section className="blade-top-padding  blade-bottom-padding min-h-[500px] grid place-content-center">
        <h2 className="text-xl md:text-2xl max-w-xl mx-auto px-3  text-center font-light">
          You are already signed in as{" "}
          <span className="font-semibold">{email}</span>
        </h2>
        <div className="grid place-content-center place-items-center  pt-3 md:mt-2">
          <button
            type="button"
            onClick={handleClick}
            className="master-btn text-white py-2 px-8 xl:px-10 xl:py-[10px] text-base md:text-lg font-medium rounded-md focus-visible:outline-green outline-transparent hover:outline-green transition-all duration-300 ease-default outline outline-[2px] outline-offset-2"
          >
            Go to dashboard
          </button>
        </div>
      </section>
    );
  return (
    <div className="blade-bottom-padding-lg  px-2 form-section-wrapper">
      <ToastContainer />
      <div className="blade-top-padding">
        <div className="grid blade-bottom-padding-sm blade-top-padding-lg text-center w-container">
          <span className="font-medium leading-snug text-base md:text-xl">
            Welcome back!
          </span>
        </div>
      </div>

      <Formik
        initialValues={initalFormState}
        validate={(values) => validator(values)}
        onSubmit={(values, actions) => submitHandler(values, actions)}
        validateOnChange={false}
      >
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-md shadow-md login-form-wrapper blade-bottom-margin-sm mx-auto md:w-11/12  p-[1.5px] rounded-xl"
          >
            <div className="md:grid-cols-1 gap-3 grid-cols-1 grid md:gap-6 md:px-4 px-4 pt-10">
              <div className=" flex flex-col ">
                <label className="mb-1 text-sm font-medium lg:text-base text-neutral-700">
                  Email*
                </label>
                <input
                  size="1"
                  name="email"
                  type="email"
                  inputMode="email"
                  className={`${
                    errors.email ? "!border-red-600" : "border-neutral-800"
                  }  placeholder:text-neutral-500 placeholder:font-normal tracking-wide px-3 py-2.5 text-sm lg:text-base text-slate-700  w-full border border-solid rounded-md transition-all ease-in-out duration-150 focus:border-green focus-visible:text-neutral-900 outline-none focus-visible:outline-none`}
                  placeholder="Enter your email address"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-[12px] md:text-sm font-medium text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className=" flex flex-col ">
                <label className="mb-1 text-sm font-medium lg:text-base text-neutral-700">
                  Password*
                </label>
                <input
                  size="1"
                  name="password"
                  type="password"
                  inputMode="text"
                  className={`${
                    errors.password ? "!border-red-600" : "border-neutral-800"
                  }  placeholder:text-neutral-500 placeholder:font-normal tracking-wide px-3 py-2.5 text-sm lg:text-base text-slate-700  w-full border border-solid rounded-md transition-all ease-in-out duration-150 focus:border-green focus-visible:text-neutral-900 outline-none focus-visible:outline-none`}
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-[12px] md:text-sm font-medium text-red-600">
                    {errors.password}
                  </p>
                )}
                <div className="pt-2">
                  <Link
                    to="/forgot-password"
                    className="underline underline-offset-2 font-medium  hover:text-green transition-colors duration-150 ease-in-out"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full flex pb-8 px-4 justify-end mt-4 md:mt-6 lg:mt-8  md:px-4">
              <button
                type="submit"
                className="master-btn text-white py-2 px-8 xl:px-10 xl:py-[10px] text-base md:text-lg font-medium rounded-md focus-visible:outline-green outline-transparent hover:outline-green transition-all duration-300 ease-default outline outline-[2px] outline-offset-2"
              >
                Log In
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

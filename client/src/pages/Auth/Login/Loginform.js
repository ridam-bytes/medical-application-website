import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegitserForm() {
  const [isLoading, toggleLoading] = useState(false);
  const initalFormState = {
    email: "",
    password: "",
  };

  const submitHandler = async (values, { resetForm }) => {
    toggleLoading(true);
    try {
      // const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/userQuery/addUserQuery`, {
      //   name,
      //   mail,
      //   message
      // });

      console.log("handle form submission  here.");
      toast.success("Form Submitted.");
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
            className="max-w-md  blade-bottom-margin-sm bg-white  mx-auto md:w-11/12 px-2 pt-10 pb-8 border-[1px] border-solid border-neutral-200 rounded-xl"
          >
            <div className="md:grid-cols-1 gap-3 grid-cols-1 grid md:gap-6 md:px-4">
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

            <div className="w-full flex justify-end mt-4 md:mt-6 lg:mt-8  md:px-4">
              <button
                type="submit"
                class="master-btn text-white py-2 px-8 xl:px-10 xl:py-[10px] text-base md:text-lg font-medium rounded-md focus-visible:outline-green outline-transparent hover:outline-green transition-all duration-300 ease-default outline outline-[2px] outline-offset-2"
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

import { Formik } from "formik";
import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isLoading, toggleLoading] = useState(false);
  const initalFormState = {
    email: "",
    fullName: "",
    message: "",
  };

  const submitHandler = async (values, { resetForm }) => {
    toggleLoading(true);
    toast.info("Submitting the form. Please wait.");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/userQuery/addUserQuery`,
        { name: values.fullName, email: values.email, message: values.message }
      );
      toast.success(res.data.message);
    } catch (err) {
      toast.error("Error! Please Try Again.");
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

    if (values.fullName === "") {
      errors.fullName = "Name is required ";
    }

    if (!values.message) {
      errors.message = "This field is required.";
    }
    return errors;
  };

  return (
    <div className="blade-bottom-padding-lg  px-2 form-section-wrapper">
      <ToastContainer />
      <div className="grid blade-bottom-padding-sm blade-top-padding-lg text-center w-container">
        <h2 className="font-semibold md:mb-2 pb-2 leading-normal from-neutral-400 bg-gradient-to-br bg-clip-text text-transparent to-neutral-800 text-3xl md:text-4xl lg:text-5xl">
          Drop us a message
        </h2>
        <span className="font-medium leading-snug text-base md:text-lg">
          Please feel free to drop us a message! <br /> We will connect with you
          soon.
        </span>
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
            className="max-w-2xl mt-2 md:mt-4 blade-bottom-margin-sm bg-white  mx-auto md:w-11/12 px-2 pt-10 pb-8 border-[1px] border-solid border-neutral-200 rounded-xl"
          >
            <div className="md:grid-cols-2 gap-3 grid-cols-1 grid md:gap-6 md:px-4">
              <div className="  flex flex-col ">
                <label className="mb-1 text-sm font-medium lg:text-base text-neutral-700">
                  Full Name*
                </label>
                <input
                  size="1"
                  name="fullName"
                  type="text"
                  className={`${
                    errors.fullName ? "!border-red-600" : "border-neutral-800"
                  }  placeholder:text-neutral-500 placeholder:font-normal tracking-wide px-3 py-2.5 text-sm lg:text-base text-slate-700  w-full border border-solid rounded-md transition-all ease-in-out duration-150 focus:border-green focus-visible:text-neutral-900 outline-none focus-visible:outline-none`}
                  placeholder="Enter your full name"
                  value={values.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <p className="text-[12px] md:text-sm font-medium text-red-600">
                    {errors.fullName}
                  </p>
                )}
              </div>

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
            </div>

            <div className="flex-1 flex flex-col flex-nowrap mt-3 md:mt-5 md:px-4  ">
              <label className="mb-1 text-sm font-medium lg:text-base text-neutral-700">
                Message
              </label>
              <textarea
                size="1"
                rows="5"
                name="message"
                type="text"
                className="placeholder:text-neutral-500 placeholder:font-normal tracking-wide px-3 py-2.5 text-sm lg:text-base text-slate-700  w-full border border-solid rounded-md transition-all ease-in-out duration-150 focus:border-green focus-visible:text-neutral-900 outline-none focus-visible:outline-none"
                placeholder="Do you have a message for us?"
                value={values.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="w-full flex justify-end mt-4 md:mt-6 lg:mt-8  md:px-4">
              <button
                disabled={isLoading}
                type="submit"
                className="master-btn disabled:opacity-50 text-white py-2 px-8 xl:px-10 xl:py-[10px] text-base md:text-lg font-medium rounded-md focus-visible:outline-green outline-transparent hover:outline-green transition-all duration-300 ease-default outline outline-[2px] outline-offset-2"
              >
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

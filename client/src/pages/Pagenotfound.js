import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div
        style={{ minHeight: "500px" }}
        className="grid place-content-center text-center place-items-center gap-4"
      >
        <h1 className="pnf-title text-black text-8xl font-semibold">404</h1>
        <h2 className="text-2xl text-center font-medium">
          Oops ! Page Not Found
        </h2>
        <div className="pt-2">
          <Link
            to="/"
            className="underline underline-offset-2 font-medium  hover:text-green transition-colors duration-150 ease-in-out"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pagenotfound;

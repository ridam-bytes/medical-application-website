import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import SubFooter from "./SubFooter";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Toaster />
        {children}
      </main>
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Layout;

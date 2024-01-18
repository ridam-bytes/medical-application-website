import React from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <Layout>
      <Carousel />
      <Testimonials />
      <ContactForm />
    </Layout>
  );
}

export default HomePage;

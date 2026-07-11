import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Courses from "./components/Courses";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Enquiry from "./components/Enquiry";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Courses />
        <HowItWorks />
        <WhyUs />
        <Enquiry />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

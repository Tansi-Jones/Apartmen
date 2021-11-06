import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";

import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import DocHead from "../components/head/DocHead";
import Navbar from "../components/navbar/Navbar";
import Partner from "../components/partner/Partner";
import Rating from "../components/rating/Rating";
import Offer from "../components/room/Offer";
import Service from "../components/service/Service";

export default function Home() {
  const [navbackground, setNavbackground] = useState("bg-white shadow-sm");
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    });
  }, []);
  return (
    <>
      {/* Document Head */}
      <DocHead />

      <div className="bg-zeroBlue">
        <nav
          className={`py-4 sticky top-0 z-50 ${
            onScroll && navbackground
          } transition transform ease-in-out duration-500`}
        >
          <Element name="top" className="element">
            <Navbar />
          </Element>
        </nav>

        <div className="w-[90%] mx-auto font-lato tracking-wider">
          <header>
            <Banner />
            <Partner />
          </header>
        </div>
        <main>
          {/* about section */}
          <div className="w-[90%] mx-auto font-lato tracking-wider">
            <Element name="about" className="element">
              <About />
            </Element>

            {/* service section */}
            <Element name="services" className="element">
              <Service />
            </Element>
          </div>

          {/* rating section */}
          <Element name="" className="element">
            <Rating />
          </Element>

          <div className="w-[90%] mx-auto font-lato tracking-wider">
            {/* best offer section */}
            <Element name="offer" className="element">
              <Offer />
            </Element>

            {/* best offer section */}
            <Element name="testimonial" className="element"></Element>
          </div>
        </main>

        <footer>
          <div className="w-[90%] mx-auto font-lato tracking-wider">
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
}

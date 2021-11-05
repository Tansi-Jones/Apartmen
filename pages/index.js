import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";

import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import DocHead from "../components/head/DocHead";
import Navbar from "../components/navbar/Navbar";
import Partner from "../components/partner/Partner";
import Service from "../components/service/Service";

export default function Home() {
  const [navbackground, setNavbackground] = useState("bg-white");
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
          <Navbar />
        </nav>
        <div className="w-[90%] mx-auto font-lato tracking-wider">
          <header>
            <Banner />
            <Partner />
          </header>

          <main>
            {/* about section */}
            <Element name="about" className="element">
              <About />
            </Element>

            {/* service section */}
            <Element name="services" className="element">
              <Service />
            </Element>
          </main>

          <footer></footer>
        </div>
      </div>
    </>
  );
}

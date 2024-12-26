import React from "react";
import Navbar from "./Landing/Navbar";
import Hero from "./Landing/Hero";
import Heroform from "./Landing/Heroform";
import Landing2 from "./Landing/Landing2";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section-wrap">
        <Hero />
        <Heroform />
      </div>
      <Landing2/>
    </div>
  );
};

export default Landing;

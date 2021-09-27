import React from "react";
import Hero from "./Hero";
import Flowers from "./Flowers";
import Section2 from "./Section2";
import HowItWorks from "./HowItWorks";
import Section3 from "./Section3";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <Hero />
        <Section2 />
        <Section3 />
        <div className="pt-60 md:w-5/6  md:mx-auto">
          <HowItWorks />
        </div>
        <div className="pt-60 md:w-5/6  md:mx-auto">
          <Flowers />
        </div>
      </div>
    </>
  );
};
export default Home;

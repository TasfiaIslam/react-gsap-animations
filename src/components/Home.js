import React from "react";
import Hero from "./Hero";
import Flowers from "./Flowers";
import Section2 from "./Section2";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <Section2 />
      <div className="pt-60 md:w-5/6  md:mx-auto">
        <HowItWorks />
      </div>
      <div className="pt-60 md:w-5/6  md:mx-auto">
        <Flowers />
      </div>
    </div>
  );
};
export default Home;

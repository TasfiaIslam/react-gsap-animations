import React from "react";
import Hero from "./Hero";
import Flowers from "./Flowers";
import Section2 from "./Section2";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <Section2 />
      <div className="pt-60 md:w-5/6  md:mx-auto">
        <Flowers />
      </div>
    </div>
  );
};
export default Home;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Steps from "./Steps";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div className="min-h-screen md:w-5/6  md:mx-auto">
      <Steps />
    </div>
  );
};
export default Home;

import React, { useEffect, useRef } from "react";
import { gsap, Power3, Bounce, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroDivRef = useRef();
  const heroRefs = useRef([]);
  heroRefs.current = [];

  const addToHeroRefs = (el) => {
    if (el && !heroRefs.current.includes(el)) {
      heroRefs.current.push(el);
    }
  };
  //   will-change: transform; transform: translate3d(0px, 1.69524%, 0px) scale3d(1, 1, 1) rotateX(12.5848deg)
  //   rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;

  //   will-change: transform;
  //   transform: translate3d(0px, 27.3053%, 0px) scale3d(1, 1, 1) rotateX(
  // 2.93775deg) rotateY(
  // 0deg) rotateZ(
  // 0deg) skew(
  // 0deg,
  // 0deg);
  //   transform-style: preserve-3d;
  const animateHeroImages = () => {
    gsap.fromTo(
      heroRefs.current,
      {
        translate3d: 30,
        scale3d: 1,
        rotateX: 50,
        rotateY: 0,
        rotateZ: 0,
        skewX: 2,
        skewY: 2,
      },
      {
        duration: 1,
        translate3d: 0,
        scale3d: 1.08,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        skewX: 0,
        skewY: 0,
        scrollTrigger: {
          trigger: heroDivRef.currentt,
          start: "top top",
          ease: Power3.easeOut,
          toggleActions: "play none none reverse",
        },
      }
    );
    // heroRefs.current.forEach((el, index) => {
    //   gsap.fromTo(
    //     el,
    //     {
    //       // skewX: 0,
    //       // skewY: 5,
    //       // autoAlpha: 0.5,
    //       //   y: -20,
    //       // zIndex: 10,
    //     },
    //     {
    //       duration: 1,
    //       // skewX: 0,
    //       // skewY: 0,
    //       // autoAlpha: 1,
    //       y: 20,

    //       // zIndex: 20,
    //       scrollTrigger: {
    //         id: `img-${index + 1}`,
    //         trigger: el,
    //         start: "top top",
    //         ease: Linear.inOut,
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // });
  };
  useEffect(() => {
    animateHeroImages();
  }, []);

  return (
    <div className="bg-gray-100 w-full relative h-96" ref={heroDivRef}>
      <div className="hero pt-60 absolute inset-x-0 w-4/6 mx-auto">
        <img
          src="https://www.mmppicture.co.in/wp-content/uploads/2021/04/CB-Background-138-857x1080.jpg"
          alt="hero"
          ref={heroRefs}
        />
      </div>
    </div>
  );
};

export default Hero;

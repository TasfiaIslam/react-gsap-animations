import React, { useEffect, useRef } from "react";
import { gsap, Power3, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroDivRef = useRef();
  const heroRefs = useRef([]);
  heroRefs.current = [];
  const buttonRefs = useRef([]);
  buttonRefs.current = [];

  const addToButtonRefs = (el) => {
    if (el && !buttonRefs.current.includes(el)) {
      buttonRefs.current.push(el);
    }
  };

  const animateHeroImage = () => {
    gsap.fromTo(
      heroRefs.current,
      {
        translate3d: 20,
        scale3d: 1,
        rotateX: 40,
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
          ease: Elastic.easeIn,
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const onMouseEnterHandler = (i) => {
    gsap.to(buttonRefs.current[i], {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: Power3.easeOut,
      play: true,
    });
  };
  const onMouseLeaveHandler = (i) => {
    gsap.to(buttonRefs.current[i], {
      scaleX: 1,
      scaleY: 1,
      ease: Power3.easeOut,
      reverse: true,
    });
  };

  const controlSpeed = () => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  };
  useEffect(() => {
    animateHeroImage();
    controlSpeed();
  }, []);

  return (
    <div
      className="bg-purple-700 w-full relative py-20 h-2/3 mx-auto z-0"
      ref={heroDivRef}
    >
      <div className="w-2/3 x-auto flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white">
          Design APIs fast, manage content easily
        </h1>
        <p className="w-1/2 mx-auto text-white py-4">
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript,
          fully customizable and developer-first. Get Started
        </p>
        <div className="flex justify-center space-x-6">
          <div
            onMouseEnter={() => onMouseEnterHandler(0)}
            onMouseLeave={() => onMouseLeaveHandler(0)}
          >
            <button
              className="bg-purple-500 text-white  py-4 px-6 rounded-lg"
              ref={addToButtonRefs}
            >
              Get Started
            </button>
          </div>
          <div
            onMouseEnter={() => onMouseEnterHandler(1)}
            onMouseLeave={() => onMouseLeaveHandler(1)}
          >
            <button
              className="bg-yellow-200 text-purple-900 py-4 px-6 rounded-lg"
              ref={addToButtonRefs}
            >
              Try Live Demo
            </button>
          </div>
        </div>
      </div>
      <div className="hero pt-5 absolute inset-x-0 w-96 mx-auto">
        <img
          className="skewElem"
          src="https://www.mmppicture.co.in/wp-content/uploads/2021/04/CB-Background-138-857x1080.jpg"
          alt="hero"
          ref={heroRefs}
        />
      </div>
    </div>
  );
};

export default Hero;

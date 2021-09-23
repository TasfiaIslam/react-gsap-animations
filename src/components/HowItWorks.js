import React, { useRef, useEffect } from "react";
import { gsap, Power3, Bounce, Linear, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const imgRefs = useRef([]);
  imgRefs.current = [];
  const rightImgRef = useRef();
  const textRef = useRef();
  const addToImgRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  const animateText = () => {
    gsap.fromTo(
      textRef.current,
      {
        duration: 1,
        autoAlpha: 0,
        y: -30,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          id: `textSection`,
          trigger: textRef.current,
          start: "top top+=500",
          ease: Power3.easeOut,
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const animateImages = () => {
    imgRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          xPercent: 100,
          y: -20,
          opacity: 0,
          rotateY: 15,
        },
        {
          duration: 1,
          xPercent: 0,
          y: 0,
          opacity: 1,
          rotateY: -15,
          scrollTrigger: {
            id: `leftSection-${index + 1}`,
            trigger: el,
            start: "top top+=500",
            ease: Power0.easeNone,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  };

  useEffect(() => {
    animateImages();
    animateText();
  });

  return (
    <div className="bg-gray-600">
      <div className="w-9/12 mx-auto bg-gray-100 py-8">
        <h1 className="text-purple-900 text-4xl font-bold">How It Works</h1>
        <p className="w-2/3 mx-auto py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus
          arcu felis.
        </p>
      </div>
      <div className="bg-purple-900 py-30 ">
        <div className="flex flex-col py-20 relative">
          <img
            className="h-24 w-24 mx-auto lg:h-96 lg:w-1/2 object-cover rounded-full absolute"
            alt="flowers"
            ref={addToImgRefs}
            src="https://media.istockphoto.com/photos/flowers-on-the-shore-of-lake-geneva-picture-id1280003274?b=1&k=20&m=1280003274&s=170667a&w=0&h=bFSswo40EQIa6Ohj7iyXSXbo4Fh2Ud3fxGnFfzUsLqU="
          />
          <p className="w-2/3 mx-auto py-8 text-white" ref={textRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus
            arcu felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

import React, { useEffect, useRef } from "react";
import { gsap, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const imgRef = useRef();
  const container = useRef();

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 0,
        rotateY: 15,
      },
      {
        duration: 1,
        xPercent: 0,
        yPercent: 20,
        opacity: 1,
        rotateY: -15,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          pin: true,
          ease: Elastic.easeIn,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="pt-60">
      <div className="py-64">
        <div className="w-full  bg-gray-800" ref={container}>
          <img
            className="h-full w-2/3 mx-auto lg:h-96 lg:w-1/2 object-cover rounded-md"
            src="https://media.istockphoto.com/photos/flowers-on-the-shore-of-lake-geneva-picture-id1280003274?b=1&k=20&m=1280003274&s=170667a&w=0&h=bFSswo40EQIa6Ohj7iyXSXbo4Fh2Ud3fxGnFfzUsLqU="
            alt="flowers"
            ref={imgRef}
          />
        </div>
      </div>
    </div>
  );
};
export default Section2;

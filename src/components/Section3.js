import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const rightTriangleRef = useRef();
  const leftTriangleRef = useRef();

  const heroTextRef = useRef([]);
  heroTextRef.current = [];

  const rightImgRef = useRef();
  const rightImgDivRef = useRef();

  const leftImgRef = useRef();
  const leftImgDivRef = useRef();

  const addToHeroTextRefs = (el) => {
    if (el && !heroTextRef.current.includes(el)) {
      heroTextRef.current.push(el);
    }
  };

  const animateTriangles = () => {
    gsap.fromTo(
      rightTriangleRef.current,
      {
        duration: 1,
        y: 0,
      },
      {
        duration: 1,
        y: 50,
        scrollTrigger: {
          trigger: rightTriangleRef.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      leftTriangleRef.current,
      {
        duration: 1,
        y: 50,
      },
      {
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: leftTriangleRef.current,
          start: "top top",
          toggleActions: "play complete none reverse",
        },
      }
    );
  };

  const animateRightImg = () => {
    gsap.fromTo(
      rightImgRef.current,
      {
        opacity: 0,
        duration: 1,
        y: -30,
        x: -50,
      },
      {
        opacity: 1,
        duration: 1,
        y: 30,
        x: 0,
        scrollTrigger: {
          trigger: rightImgRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.from(rightImgDivRef.current, {
      opacity: 0,
      duration: 1,
      backgroundPosition: "200px 0px",
    });
  };

  const animateLeftImg = () => {
    const anim = gsap.fromTo(
      leftImgRef.current,
      {
        opacity: 0,
        duration: 1,
        y: 30,
        x: 50,
      },
      {
        opacity: 1,
        duration: 1,
        y: 10,
        x: 0,
      }
    );
    // scrollTrigger: {
    //       trigger: leftImgRef.current,
    //       start: 'top top+=50',
    //       toggleActions: 'play none none play',
    //     },
    ScrollTrigger.create({
      trigger: leftImgRef.current,
      start: "top top+=50",
      // toggleActions: 'play none none play',
      onEnter: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: leftImgRef.current,
      start: "center top+=50",
      // toggleActions: 'play none none play',
      onLeave: () => anim.reverse(),
    });
    gsap.from(leftImgDivRef.current, {
      opacity: 0,
      duration: 1,
      backgroundPosition: "200px 0px",
    });
  };

  const animateText = () => {
    heroTextRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          duration: 1,
          y: 10,
          stagger: 0.6,
        },
        {
          opacity: 1,
          duration: 1,
          y: 50,
          stagger: 0.6,
          scrollTrigger: {
            trigger: el,
            start: "top center+=150",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  };

  useEffect(() => {
    animateText();
    animateRightImg();
    animateLeftImg();
    animateTriangles();
  });

  return (
    <>
      <div className="w-8/12 mx-auto flex justify-between space-x-4 py-20">
        <div className="w-1/2 flex flex-col relative">
          <img
            ref={leftTriangleRef}
            className=""
            src="https://strapi.io/assets/decoration/triangle.svg"
          />
          <div className="absolute bottom-0" ref={leftImgDivRef}>
            <img
              ref={leftImgRef}
              className="hero-image w-full h-96  object-cover rounded-lg"
              src="https://image.freepik.com/free-photo/venice-canal-with-tourist-gondola_49537-57.jpg"
              alt="hero"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="pt-20 flex flex-col items-end">
            <h1 className="font-bold text-3xl pb-4" ref={addToHeroTextRefs}>
              Trending.Arts.For.You
            </h1>
            <p ref={addToHeroTextRefs}>
              Check out all the latest arts from all around the world.
            </p>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto flex justify-between space-x-4 pb-20">
        <div className="w-1/2">
          <div className="pt-10">
            <h1 className="font-bold text-3xl pb-4" ref={addToHeroTextRefs}>
              Trending.Arts.For.You
            </h1>
            <p ref={addToHeroTextRefs}>
              Check out all the latest arts from all around the world.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-end relative">
          <img
            ref={rightTriangleRef}
            className="transform rotate-90"
            src="https://strapi.io/assets/decoration/triangle.svg"
          />
          <div className="absolute" ref={rightImgDivRef}>
            <img
              ref={rightImgRef}
              className="hero-image w-full h-96  object-cover rounded-lg"
              src="https://image.freepik.com/free-photo/graffiti-children-bicycle_1122-2206.jpg"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;

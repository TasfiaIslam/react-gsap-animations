import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const triangle2Ref = useRef();
  const triangle1Ref = useRef();
  const triangle3Ref = useRef();

  const heroTextRef = useRef([]);
  heroTextRef.current = [];

  const rightImgDivRef = useRef();

  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();

  const addToHeroTextRefs = (el) => {
    if (el && !heroTextRef.current.includes(el)) {
      heroTextRef.current.push(el);
    }
  };

  const animateTriangles = () => {
    gsap.fromTo(
      triangle1Ref.current,
      {
        duration: 1,
        y: 50,
      },
      {
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: triangle1Ref.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      triangle2Ref.current,
      {
        duration: 1,
        y: 0,
      },
      {
        duration: 1,
        y: 50,
        scrollTrigger: {
          trigger: triangle2Ref.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      triangle3Ref.current,
      {
        duration: 1,
        y: 50,
      },
      {
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: triangle3Ref.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const animateStep1 = () => {
    gsap.fromTo(
      step1Ref.current,
      {
        display: "none",
        duration: 1,
        y: 30,
        x: 50,
        rotateX: 0,
        rotateY: -10,
        scaleX: 1,
      },
      {
        display: "block",
        duration: 1,
        scrub: 1,
        y: 10,
        x: 0,
        rotateX: 10,
        rotateY: 10,
        scaleX: 1.04,
        pin: true,
        scrollTrigger: {
          trigger: step1Ref.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // leftDivRef.current.forEach((el, index) => {
    //   gsap.from(el, {
    //     opacity: 0,
    //     duration: 1,
    //     backgroundPosition: "200px 0px",
    //   });
    // });
  };

  const animateStep2 = () => {
    gsap.fromTo(
      step2Ref.current,
      {
        display: "none",
        duration: 1,
        y: -30,
        x: -50,
        rotateX: 0,
        rotateY: 10,
        scaleX: 1,
      },
      {
        display: "block",
        duration: 1,
        y: 30,
        x: 0,
        rotateX: 10,
        rotateY: -10,
        scaleX: 1.04,
        pin: true,
        scrollTrigger: {
          trigger: step2Ref.current,
          start: "top center",
          // end: "center bottom",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    // gsap.from(rightImgDivRef.current, {
    //   opacity: 0,
    //   duration: 1,
    //   backgroundPosition: "200px 0px",
    // });
  };

  const animateStep3 = () => {
    gsap.fromTo(
      step3Ref.current,
      {
        display: "none",
        duration: 1,
        y: -30,
        x: 100,
        rotateX: 0,
        rotateY: -10,
        scaleX: 1,
      },
      {
        display: "block",
        duration: 1,
        scrub: 1,
        y: 10,
        x: 0,
        rotateX: 10,
        rotateY: 10,
        scaleX: 1.04,
        pin: true,
        scrollTrigger: {
          trigger: step3Ref.current,
          start: "top bottom",
          end: "center top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
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
    animateTriangles();
    animateStep1();
    animateStep2();
    animateStep3();
  });

  return (
    <>
      {/* step 1 */}
      <div className="w-8/12 mx-auto flex justify-between space-x-4 pt-20 pb-64">
        <div className="w-1/2 flex flex-col relative">
          <img
            ref={triangle1Ref}
            className=""
            src="https://strapi.io/assets/decoration/triangle.svg"
            alt="triangle"
          />
          <div className="absolute bottom-0">
            <img
              ref={step1Ref}
              className="hero-image w-full h-96  object-cover rounded-lg"
              src="https://image.freepik.com/free-photo/venice-canal-with-tourist-gondola_49537-57.jpg"
              alt="boat"
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
      {/* step 2 */}
      <div className="w-8/12 mx-auto flex justify-between space-x-4 pb-64">
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
            ref={triangle2Ref}
            className="transform rotate-90"
            src="https://strapi.io/assets/decoration/triangle.svg"
            alt="triangle"
          />
          <div className="absolute lg:left-2 top-0" ref={rightImgDivRef}>
            <img
              ref={step2Ref}
              className="hero-image w-full h-96  object-cover rounded-lg"
              src="https://image.freepik.com/free-photo/graffiti-children-bicycle_1122-2206.jpg"
              alt="cycle"
            />
          </div>
        </div>
      </div>
      {/* step 3 */}
      <div className="w-8/12 mx-auto flex justify-between space-x-4 pb-20">
        <div className="w-1/2 flex flex-col relative">
          <img
            ref={triangle3Ref}
            className="transform rotate-90"
            src="https://strapi.io/assets/decoration/triangle.svg"
            alt="triangle"
          />
          <div className="absolute top-4">
            <img
              ref={step3Ref}
              className="hero-image w-full h-96  object-cover rounded-lg"
              src="https://image.freepik.com/free-psd/minimal-desktop-workspace-mock-up-design_23-2149012109.jpg"
              alt="boat"
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
    </>
  );
};

export default Section3;

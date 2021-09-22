import React, { useEffect, useRef } from "react";

import { gsap, Power3, Bounce } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import waterlilly from "./_icons/waterlilly.svg";
import bungaku from "./_icons/bungaku.svg";
import daffodil from "./_icons/daffodil.svg";
import flower from "./_icons/flower.svg";
import herbs from "./_icons/herbs.svg";
import tonlima from "./_icons/tonlima.svg";

gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
  const titleSectionRefs = useRef([]);
  titleSectionRefs.current = [];

  const rightDivRefs = useRef([]);
  const lelftDivRefs = useRef([]);
  lelftDivRefs.current = [];
  rightDivRefs.current = [];

  const imgRefs = useRef([]);
  imgRefs.current = [];

  const heroRefs = useRef([]);
  heroRefs.current = [];

  const addToLeftDivRefs = (el) => {
    if (el && !lelftDivRefs.current.includes(el)) {
      lelftDivRefs.current.push(el);
    }
  };
  const addToRightDivRefs = (el) => {
    if (el && !rightDivRefs.current.includes(el)) {
      rightDivRefs.current.push(el);
    }
  };
  const addToTitleRefs = (el) => {
    if (el && !titleSectionRefs.current.includes(el)) {
      titleSectionRefs.current.push(el);
    }
  };
  const addToImgRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  const addToHeroRefs = (el) => {
    if (el && !heroRefs.current.includes(el)) {
      heroRefs.current.push(el);
    }
  };

  const animateHeroImages = () => {
    heroRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          skewX: 0,
          skewY: 0,
          z: -10,
        },
        {
          duration: 1,
          skewX: 0,
          skewY: 0,
          z: 10,
          transformOrigin: "0% 100%",
          // force3D: true,
          scrollTrigger: {
            id: `img-${index + 1}`,
            trigger: el,
            pin: true,
            start: "top top",
            end: "+=500",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  };

  const animateImages = () => {
    imgRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          x: 20,
          y: 20,
          skewX: 45,
          skewY: 45,
        },
        {
          duration: 1,
          x: 0,
          y: 0,
          skewX: 0,
          skewY: 0,
          scrollTrigger: {
            id: `img-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  };

  const animateTitles = () => {
    titleSectionRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 40,
        },
        {
          duration: 1,
          autoAlpha: 1,
          y: 10,
          scrollTrigger: {
            id: `title-${index + 1}`,
            trigger: el,
            start: "top center+=50",
            toggleActions: "play none none reverse",
            onEnterBack: (self) =>
              console.log("toggled, isActive:", self.isActive),
          },
        }
      );
    });
  };

  const animateLeft = () => {
    lelftDivRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: 100,
          y: 20,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: Power3.easeOut,
          x: 0,
          y: 0,
          scrollTrigger: {
            id: `leftSection-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
            onEnterBack: (self) =>
              console.log("toggled, isActive:", self.isActive),
          },
        }
      );
    });
  };

  const animateRight = () => {
    rightDivRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x: -100,
          y: -20,
        },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          y: 0,
          ease: Power3.easeOut,
          scrollTrigger: {
            id: `rightSection-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
            onEnterBack: (self) =>
              console.log("toggled, isActive:", self.isActive),
          },
        }
      );
    });
  };

  useEffect(() => {
    animateHeroImages();
    animateTitles();
    animateImages();
    animateLeft();
    animateRight();
  }, []);
  return (
    <>
      <div className="hero pt-10">
        <img
          src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg"
          alt="hero"
          ref={addToHeroRefs}
        />
      </div>
      <div className="hero pt-10">
        <img
          src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="hero"
          ref={addToHeroRefs}
        />
      </div>
      <div className="hero pt-10">
        <img
          src="https://www.mmppicture.co.in/wp-content/uploads/2021/04/CB-Background-138-857x1080.jpg"
          alt="hero"
          ref={addToHeroRefs}
        />
      </div>
      <div className="pr-2 md:pr-5 pt-20 pb-10 flex justify-end step-right">
        <div className="pt-10 flex flex-col" ref={addToTitleRefs}>
          <h1 className="font-bold text-lg pb-4">Build App Fast</h1>
          <p className="text-sm w-2/3 mx-auto md:w-4/5">
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
        <div
          className="w-72 md:w-96 h-96 flex flex-col border-2 border-green-500 rounded-lg shadow-green"
          ref={addToRightDivRefs}
        >
          <p className="title">Waterlilly</p>
          <p className="content">
            Water Lily (shapla) an aquatic plant of the genus Nymphaea which has
            large, disk-like, floating leaves and showy flowers.
          </p>
          <div className="flex justify-center pt-5">
            <img
              className="w-40 h-40 object-fit"
              src={waterlilly}
              alt="waterlilly"
              ref={addToImgRefs}
            />
          </div>
        </div>
      </div>
      <div className="pl-2 md:pl-5 flex justify-start step-left">
        <div
          className="w-72 md:w-96 h-96 flex flex-col border-2 border-green-500 rounded-lg shadow-green"
          ref={addToLeftDivRefs}
        >
          <p className="title">Daffodil</p>
          <p className="content">
            Water Lily (shapla) an aquatic plant of the genus Nymphaea which has
            large, disk-like, floating leaves and showy flowers.
          </p>
          <div className="flex justify-center pt-5">
            <img
              className="w-40 h-40 object-fit"
              src={daffodil}
              alt="daffodil"
              ref={addToImgRefs}
            />
          </div>
        </div>
        <div className="pt-10 flex flex-col" ref={addToTitleRefs}>
          <h1 className="font-bold text-lg pb-4">Build App Fast</h1>
          <p className="text-sm w-2/3 mx-auto md:w-4/5">
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
      </div>
      <div className="pr-2 md:pr-5 py-10 flex justify-end step-right">
        <div className="pt-10 flex flex-col" ref={addToTitleRefs}>
          <h1 className="font-bold text-lg pb-4">Build App Fast</h1>
          <p className="text-sm w-2/3 mx-auto md:w-4/5">
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
        <div
          className="w-72 md:w-96 h-96 flex flex-col border-2 border-green-500 rounded-lg shadow-green"
          ref={addToRightDivRefs}
        >
          <p className="title">Herbs</p>
          <p className="content">
            Water Lily (shapla) an aquatic plant of the genus Nymphaea which has
            large, disk-like, floating leaves and showy flowers.
          </p>
          <div className="flex justify-center pt-5">
            <img
              className="w-40 h-40 object-fit"
              src={herbs}
              alt="herbs"
              ref={addToImgRefs}
            />
          </div>
        </div>
      </div>
      <div className="pl-2  md:pl-5 pb-10 flex justify-start step-left">
        <div
          className="w-72 md:w-96 h-96 flex flex-col border-2 border-green-500 rounded-lg shadow-green"
          ref={addToLeftDivRefs}
        >
          <p className="title">Tonlima</p>
          <p className="content">
            Water Lily (shapla) an aquatic plant of the genus Nymphaea which has
            large, disk-like, floating leaves and showy flowers.
          </p>
          <div className="flex justify-center pt-5">
            <img
              className="w-40 h-40 object-fit"
              src={tonlima}
              alt="tonlima"
              ref={addToImgRefs}
            />
          </div>
        </div>
        <div className="pt-10 flex flex-col" ref={addToTitleRefs}>
          <h1 className="font-bold text-lg pb-4">Build App Fast</h1>
          <p className="text-sm w-2/3 mx-auto md:w-4/5">
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
      </div>
      <div className="pr-2 md:pr-5 flex justify-end step-right">
        <div className="pt-10 flex flex-col" ref={addToTitleRefs}>
          <h1 className="font-bold text-lg pb-4">Build App Fast</h1>
          <p className="text-sm w-2/3 mx-auto md:w-4/5">
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
        <div
          className="w-72 md:w-96 h-96 flex flex-col border-2 border-green-500 rounded-lg shadow-green"
          ref={addToRightDivRefs}
        >
          <p className="title">Random Flower</p>
          <p className="content">
            Water Lily (shapla) an aquatic plant of the genus Nymphaea which has
            large, disk-like, floating leaves and showy flowers.
          </p>
          <div className="flex justify-center pt-5">
            <img
              className="w-40 h-40 object-fit"
              src={flower}
              alt="flower"
              ref={addToImgRefs}
            />
          </div>
        </div>
      </div>
      <div className="pl-2 md:pl-5 py-10 flex justify-start step-left">
        <div
          className="w-72 md:w-96 h-96 flex flex-col border-2 border-green-500 rounded-lg shadow-green"
          ref={addToLeftDivRefs}
        >
          <p className="title">Bungaku</p>
          <p className="content">
            Water Lily (shapla) an aquatic plant of the genus Nymphaea which has
            large, disk-like, floating leaves and showy flowers.
          </p>
          <div className="flex justify-center pt-5">
            <img
              className="w-40 h-40 object-fit"
              src={bungaku}
              alt="bungaku"
              ref={addToImgRefs}
            />
          </div>
        </div>
        <div className="pt-10 flex flex-col" ref={addToTitleRefs}>
          <h1 className="font-bold text-lg pb-4">Build App Fast</h1>
          <p className="text-sm w-2/3 mx-auto md:w-4/5">
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
      </div>
    </>
  );
};
export default Steps;

import React, { useState, useRef } from "react";
import { gsap, Power3, Elastic } from "gsap";

const Navbar = () => {
  const buttonRef = useRef();
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const onMouseEnterHandler = () => {
    gsap.to(buttonRef.current, {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: Power3.easeOut,
      play: true,
    });
  };
  const onMouseLeaveHandler = () => {
    gsap.to(buttonRef.current, {
      scaleX: 1,
      scaleY: 1,
      ease: Power3.easeOut,
      reverse: true,
    });
  };

  return (
    <div
      className={`w-full fixed z-20  ${
        colorChange
          ? "bg-white"
          : "bg-gradient-to-r from-gray-900 to-purple-900"
      }`}
    >
      <div className="md:w-8/12 md:mx-auto px-6 py-8 flex justify-between">
        <div
          className={`flex space-x-4 lg:space-x-12   ${
            colorChange ? "text-purple-900" : "text-white"
          }`}
        >
          <div className="text-xl 2xl:text-3xl font-bold flex items-center">
            Logo
          </div>
          <ul className="flex space-x-2 lg:space-x-10 items-center text-base  2xl:text-lg">
            <li>
              <a href="/">
                <span
                  className={`header-link-item ${
                    colorChange
                      ? "purple-border hover:text-purple-500"
                      : "white-border"
                  }`}
                >
                  Why Strapi
                </span>
              </a>
            </li>
            <li>
              <a href="/">
                <span
                  className={`header-link-item ${
                    colorChange
                      ? "purple-border hover:text-purple-500"
                      : "white-border"
                  }`}
                >
                  Solutions
                </span>
              </a>
            </li>
            <li>
              <a href="/">
                <span
                  className={`header-link-item ${
                    colorChange
                      ? "purple-border hover:text-purple-500"
                      : "white-border"
                  }`}
                >
                  Open-Source
                </span>
              </a>
            </li>
            <li>
              <a href="/">
                <span
                  className={`header-link-item ${
                    colorChange
                      ? "purple-border hover:text-purple-500"
                      : "white-border"
                  }`}
                >
                  Docs &amp; Resources
                </span>
              </a>
            </li>
            <li>
              <a href="/">
                <span
                  className={`header-link-item ${
                    colorChange
                      ? "purple-border hover:text-purple-500"
                      : "white-border"
                  }`}
                >
                  Pricing
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`nav-button ${
            colorChange
              ? "bg-purple-500 text-white"
              : "bg-white text-purple-900"
          }`}
          onMouseEnter={() => onMouseEnterHandler()}
          onMouseLeave={() => onMouseLeaveHandler()}
          ref={buttonRef}
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Navbar;

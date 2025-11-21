import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoWhite from "../assets/logo.svg";
import LogoBlack from "../assets/logo-blue.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navbarHeight = "70px";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const target = document.getElementById("enquiry-form");
    if (target) {
      const isDesktop = window.innerWidth >= 768; // Tailwind's md breakpoint
      const headerOffset = isDesktop ? 210 : 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-1500 h-[70px] transition-all duration-300
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}
        style={{ transform: "translateZ(0)" }}
      >
        <div className="max-w-[1300px] px-[20px] md:px-[40px] py-[16px] mx-auto flex items-center justify-between h-full">
          {/* CHANGE LOGO BASED ON SCROLL */}
          <NavLink to="/">
            <img
              src={scrolled ? LogoBlack : LogoWhite}
              alt="logo"
              className="md:max-w-[100%] w-[90%] block transition-all duration-300"
            />
          </NavLink>

          {/* BUTTON: white mode + black mode */}
          <button
            onClick={scrollToForm}
            className={`
    group relative flex items-center justify-center 
    hover:border-[#F1701E] px-3 font-semibold py-2 overflow-hidden rounded-md border 
    transition-all duration-300
    ${
      scrolled
        ? "text-black border-black hover:text-[white]"
        : "text-white border-white"
    }
  `}
          >
            <span className="relative z-10 text-[14px] leading-none">
              CONTACT US
            </span>

            {/* Ripple orange effect */}
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span
                className="absolute left-0 aspect-square w-full origin-center 
      -translate-x-full rounded-full bg-[#F1701E] transition-all duration-500 
      group-hover:-translate-x-0 group-hover:scale-150"
              ></span>
            </span>
          </button>
        </div>
      </nav>

      <div style={{ height: navbarHeight }} />
    </>
  );
};

export default Header;

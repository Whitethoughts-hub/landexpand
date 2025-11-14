import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navbarHeight = "90px";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const target = document.getElementById("enquiry-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 h-[70px] transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1300px] px-[20px] md:px-[40px] py-[16px] mx-auto flex items-center justify-between h-full">
          {/* LEFT: LOGO */}
          <NavLink to="/">
            <img src={Logo} alt="logo" className="w-[100%] block" />
          </NavLink>

          {/* RIGHT: ENQUIRE NOW BUTTON */}
          <button
            onClick={scrollToForm}
            className="px-4 py-2 border border-black text-black text-sm font-medium rounded-md hover:bg-[#F1701E] hover:border-[#F1701E] hover:text-white transition-all duration-300"
          >
            ENQUIRE NOW
          </button>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: navbarHeight }} />
    </>
  );
};

export default Header;

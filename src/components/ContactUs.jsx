import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Form from "../components/Form";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FormBg from "../assets/Form-Bg-ImageF.png";
const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  if (isInView) controls.start("visible");

  /* ---------------- VARIANTS ---------------- */
  const firstGroupVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const staggerRest = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="w-full flex items-center justify-center flex-col pt-[100px]  bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${FormBg})` }}
      id="enquiry-form"
    >
      <div
        ref={ref}
        className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex flex-col lg:flex-row flex-col-reverse justify-between gap-[50px] lg:gap-0"
      >
        {/* LEFT SIDE - LOCATION HIGHLIGHTS */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4 order-2 lg:order-1">
          <h2 className="text-[28px]">What’s nearby</h2>

          {/* ROW 1 */}
          <div className="px-5 py-4 flex items-center justify-between">
            <p className="text-[16px]">Kokapet</p>
            <p className="text-[16px] text-gray-600">30 mins</p>
          </div>

          {/* ROW 2 */}
          <div className="px-5 py-4 flex items-center justify-between">
            <p className="text-[16px]">ORR</p>
            <p className="text-[16px] text-gray-600">37 mins</p>
          </div>

          {/* ROW 3 */}
          <div className="px-5 py-4 flex items-center justify-between">
            <p className="text-[16px]">Financial District</p>
            <p className="text-[16px] text-gray-600">25 mins</p>
          </div>

          {/* ROW 4 */}
          <div className="px-5 py-4 flex items-center justify-between">
            <p className="text-[16px]">Airport</p>
            <p className="text-[16px] text-gray-600">45 mins</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div
          className="
            w-full 
            lg:w-[40%] 
            order-1 lg:order-2
          "
        >
          <Form />
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[#F1701E]">
        <footer className="max-w-[1300px] w-full text-white flex md:flex-row flex-col items-center justify-between px-[20px] md:px-[40px] py-[10px]">
          <p className="text-center md:text-left footer-text">
            © 2025 All rights reserved | Privacy Policy
            <br />
            Designed & Developed by{" "}
            <a
              href="https://whitethoughts.in"
              target="_blank"
              className="footer-text"
            >
              White Thoughts & Branding
            </a>
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactUs;

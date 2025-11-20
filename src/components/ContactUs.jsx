import React, { useRef } from "react";
import { motion } from "framer-motion";
import Form from "../components/Form";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FormBg from "../assets/Form-Bg-ImageF.png";

const ContactUs = () => {
  const ref = useRef(null);

  /* ---------------- VARIANTS ---------------- */
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const nearbyLocations = [
    { name: "Kokapet", time: "30 mins" },
    { name: "ORR", time: "37 mins" },
    { name: "Financial District", time: "25 mins" },
    { name: "Airport", time: "45 mins" },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section
      className="w-full flex items-center justify-center flex-col pt-[50px] md:pt-[100px]  bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${FormBg})` }}
      id="enquiry-form"
    >
      <div
        ref={ref}
        className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex flex-col lg:flex-row flex-col-reverse justify-between gap-[50px] lg:gap-0"
      >
        {/* LEFT SIDE - LOCATION HIGHLIGHTS */}
        <motion.div
          className="w-full lg:w-[30%] flex flex-col gap-4 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-[32px] md:text-left text-center"
            variants={itemVariants}
          >
            What’s nearby
          </motion.h2>

          {/* ROWS */}
          {nearbyLocations.map((item, idx) => (
            <motion.div
              key={idx}
              className="px-5 py-4 flex items-center justify-between"
              variants={itemVariants}
            >
              <p className="text-[16px]">{item.name}</p>
              <p className="text-[16px] text-gray-600">{item.time}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full lg:w-[40%] order-1 lg:order-2">
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Form />
          </motion.div>
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

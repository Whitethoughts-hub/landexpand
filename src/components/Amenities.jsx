import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";

import Icon1 from "../assets/Amenities/amenities-1.svg";
import Icon2 from "../assets/Amenities/amenities-1.svg";
import Icon3 from "../assets/Amenities/amenities-1.svg";
import Icon4 from "../assets/Amenities/amenities-1.svg";
import Icon5 from "../assets/Amenities/amenities-1.svg";
import Icon6 from "../assets/Amenities/amenities-1.svg";

const Amenities = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inView = useInView(sectionRef, { amount: 0.2, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // BIG TEXT ANIMATION
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 10%"],
  });

  const bigX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const bigOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // MOBILE ANIMATION (bottom -> top for both icon & text)
  const mobileVariants = {
    hidden: { opacity: 0, y: 80, scale: 1.05 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  // DESKTOP ICON VARIANT
  const iconVariants = {
    hidden: { opacity: 0, y: 80, scale: 1.05 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // DESKTOP TEXT VARIANT (top -> bottom)
  const textVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const list = [
    { icon: Icon1, text: "Swimming Pool" },
    { icon: Icon2, text: "Senior citizens’ cove" },
    { icon: Icon3, text: "Party Lawn" },
    { icon: Icon4, text: "Outdoor Play Area" },
    { icon: Icon5, text: "Kids' Play Area" },
    { icon: Icon6, text: "Hammock Garden" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center relative overflow-hidden py-0"
    >
      <div className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex justify-between items-end overflow-visible">
        <h2 className="text-[32px] leading-[1] mb-[10px] whitespace-nowrap z-20">
          Amenities
        </h2>

        {/* BIG BACKGROUND TEXT */}
        <motion.h1
          style={{ x: bigX, opacity: bigOpacity }}
          className="hidden md:block text-black/5 font-light pointer-events-none select-none text-[70px] lg:text-[140px] leading-[1] whitespace-normal break-words max-w-[90%] lg:max-w-[1100px] translate-y-[8px] text-right"
        >
          AMENITIES
        </motion.h1>
      </div>

      <motion.div
        className="max-w-[1300px] pb-[100px] pt-[30px] md:pt-[50px] px-[20px] md:px-[40px] w-full"
        initial="hidden"
        animate={controls}
        variants={
          !isMobile && { visible: { transition: { staggerChildren: 0.15 } } }
        }
      >
        <div className="flex flex-wrap justify-between gap-y-12">
          {list.map((item, index) => (
            <div
              key={index}
              className="w-[48%] sm:w-[48%] lg:w-[32%] flex flex-col md:flex-row md:items-center text-center md:text-left gap-3"
            >
              <motion.div
                custom={index}
                variants={isMobile ? mobileVariants : iconVariants}
                className="w-[70px] h-[70px] mx-auto md:mx-0 flex items-center justify-center rounded-full border-2 border-[#c79a42]"
              >
                <img src={item.icon} className="w-[38px]" />
              </motion.div>

              <motion.p
                custom={index}
                variants={isMobile ? mobileVariants : textVariants}
                className="text-[16px] font-medium"
              >
                {item.text}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Amenities;

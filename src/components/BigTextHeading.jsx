import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeadingSection = ({ title, bigText }) => {
  const sectionRef = useRef(null);

  // BIG TEXT ANIMATION
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 10%"],
  });

  const bigX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const bigOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section className="w-full  hidden md:block">
      <div
        ref={sectionRef}
        className="w-full flex flex-col items-center justify-center relative overflow-hidden py-0"
      >
        <div className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex justify-between items-end overflow-visible">
          {/* SMALL MAIN HEADING */}
          <h2 className="text-[32px] leading-[1] mb-[10px] whitespace-nowrap z-20">
            {title}
          </h2>

          {/* BIG ANIMATED BACKGROUND HEADING */}
          <motion.h1
            style={{ x: bigX, opacity: bigOpacity }}
            className="
              hidden md:block
              text-black/5 font-light
              pointer-events-none select-none
              text-[70px] lg:text-[140px]
              leading-[1]
              whitespace-normal break-words
              max-w-[90%] lg:max-w-[1100px]
              translate-y-[8px]
              text-right
            "
          >
            {bigText}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;

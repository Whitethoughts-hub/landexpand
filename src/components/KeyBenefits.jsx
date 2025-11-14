import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Img1 from "../assets/KeyBenefits/Image-1.jpg";
import Img2 from "../assets/KeyBenefits/Image-2.jpg";
import Img3 from "../assets/KeyBenefits/Image-3.jpg";

const KeyBenefits = () => {
  const sectionRef = useRef(null);

  // SCROLL PROGRESS ONLY FOR THIS SECTION
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 10%"],
  });

  // Big heading movement from +200px → 0px
  const bigX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const bigOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-start justify-center relative overflow-hidden py-0"
    >
      {/* ========== TOP HEADING AREA ========== */}
      <div className="w-full px-5 md:px-10 relative flex justify-between overflow-visible">
        {/* SMALL HEADING */}
        <h2 className="text-[20px] mb-[30px] md:text-[26px] font-semibold z-20 whitespace-nowrap self-end">
          Key Benefits
        </h2>

        {/* BIG GHOST HEADING */}
        <motion.h1
          style={{
            x: bigX,
            opacity: bigOpacity,
          }}
          className="
      text-black/5 font-light pointer-events-none select-none
      text-[60px] md:text-[100px] lg:text-[140px] font-weight
      relative -translate-y-2 md:-translate-y-3 lg:-translate-y-6
    "
        >
          KEY BENEFITS
        </motion.h1>
      </div>

      {/* ========== IMAGES AREA ========== */}
      <div className="max-w-[1300px] w-full pb-[100px] px-5 md:px-10 mt-8 z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">
          {[Img1, Img2, Img3].map((img, i) => (
            <div
              key={i}
              className="w-full md:w-[30%] flex flex-col items-center"
            >
              <img src={img} alt="" className="w-full h-auto object-cover" />
              <p className="text-center mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;

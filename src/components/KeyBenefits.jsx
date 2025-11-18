import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Img1 from "../assets/KeyBenefits/Image-1.jpg";
import Img2 from "../assets/KeyBenefits/Image-2.jpg";
import Img3 from "../assets/KeyBenefits/Image-3.jpg";

const KeyBenefits = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 10%"],
  });

  const bigX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const bigOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center relative overflow-hidden py-0"
    >
      {/* TOP HEADING AREA */}
      <div className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex justify-between items-end overflow-visible">
        {/* SMALL HEADING - ALWAYS VISIBLE */}
        <h2
          className="
           text-[32px]
           leading-[1]
            z-20 
            whitespace-nowrap 
            mb-[10px] 
          "
        >
          Key Benefits
        </h2>

        {/* BIG HEADING - ONLY FOR MD AND ABOVE */}
        <motion.h1
          style={{ x: bigX, opacity: bigOpacity }}
          className="
            hidden md:block
            text-black/5 
            font-light 
            pointer-events-none 
            select-none
            text-[70px] lg:text-[140px]
            leading-[1]
            whitespace-normal
            break-words
            max-w-[90%] 
            lg:max-w-[1100px]
            translate-y-[8px]
            text-right 
          "
        >
          KEY BENEFITS
        </motion.h1>
      </div>

      {/* IMAGES */}
      <div className="max-w-[1300px] w-full pt-[30px] md:pt-[50px] pb-[100px] px-[20px] md:px-[40px] z-10">
        <div className="flex flex-col md:flex-row justify-between gap-[30px] md:gap-[50px]">
          {[Img1, Img2, Img3].map((img, i) => (
            <div
              key={i}
              className="w-full md:w-[30%] flex flex-col items-center"
            >
              <motion.img
                src={img}
                alt=""
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <p className="text-center mt-4 text-gray-700 leading-[1.4]">
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

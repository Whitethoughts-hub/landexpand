import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Icon1 from "../assets/Amenities/amenities-1.svg";
import Icon2 from "../assets/Amenities/amenities-1.svg";
import Icon3 from "../assets/Amenities/amenities-1.svg";
import Icon4 from "../assets/Amenities/amenities-1.svg";
import Icon5 from "../assets/Amenities/amenities-1.svg";
import Icon6 from "../assets/Amenities/amenities-1.svg";

const Amenities = () => {
  const sectionRef = useRef(null);

  // SAME ANIMATION VALUES AS KEY BENEFITS
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
      {/* TOP HEADING AREA (same structure as Key Benefits) */}
      <div className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex justify-between items-end overflow-visible">
        {/* SMALL HEADING LEFT */}
        <h2
          className="
           text-[32px]
           leading-[1]
           mb-[10px]
           whitespace-nowrap
           z-20
         "
        >
          Amenities
        </h2>

        {/* BIG ANIMATED HEADING RIGHT (hidden on mobile) */}
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
          AMENITIES
        </motion.h1>
      </div>

      {/* AMENITIES ORIGINAL LAYOUT (NOT TOUCHED AT ALL) */}
      <div className="max-w-[1300px] pb-[100px] pt-[30px] md:pt-[50px] px-[20px] md:px-[40px] w-full">
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* ITEM 1 */}
          <div
            className="w-[48%] sm:w-[48%] lg:w-[32%]
                        flex flex-col md:flex-row md:items-center
                        text-center md:text-left gap-3"
          >
            <div
              className="w-[70px] h-[70px] mx-auto md:mx-0
                          flex items-center justify-center rounded-full
                          border-2 border-[#c79a42]"
            >
              <img src={Icon1} className="w-[38px]" />
            </div>
            <p>Swimming Pool</p>
          </div>

          {/* ITEM 2 */}
          <div
            className="w-[48%] sm:w-[48%] lg:w-[32%]
                        flex flex-col md:flex-row md:items-center
                        text-center md:text-left gap-3"
          >
            <div
              className="w-[70px] h-[70px] mx-auto md:mx-0
                          flex items-center justify-center rounded-full
                          border-2 border-[#c79a42]"
            >
              <img src={Icon2} className="w-[38px]" />
            </div>
            <p>Senior citizens’ cove</p>
          </div>

          {/* ITEM 3 */}
          <div
            className="w-[48%] sm:w-[48%] lg:w-[32%]
                        flex flex-col md:flex-row md:items-center
                        text-center md:text-left gap-3"
          >
            <div
              className="w-[70px] h-[70px] mx-auto md:mx-0
                          flex items-center justify-center rounded-full
                          border-2 border-[#c79a42]"
            >
              <img src={Icon3} className="w-[38px]" />
            </div>
            <p>Party Lawn</p>
          </div>

          {/* ITEM 4 */}
          <div
            className="w-[48%] sm:w-[48%] lg:w-[32%]
                        flex flex-col md:flex-row md:items-center
                        text-center md:text-left gap-3"
          >
            <div
              className="w-[70px] h-[70px] mx-auto md:mx-0
                          flex items-center justify-center rounded-full
                          border-2 border-[#c79a42]"
            >
              <img src={Icon4} className="w-[38px]" />
            </div>
            <p>Outdoor Play Area</p>
          </div>

          {/* ITEM 5 */}
          <div
            className="w-[48%] sm:w-[48%] lg:w-[32%]
                        flex flex-col md:flex-row md:items-center
                        text-center md:text-left gap-3"
          >
            <div
              className="w-[70px] h-[70px] mx-auto md:mx-0
                          flex items-center justify-center rounded-full
                          border-2 border-[#c79a42]"
            >
              <img src={Icon5} className="w-[38px]" />
            </div>
            <p>Kids' Play Area</p>
          </div>

          {/* ITEM 6 */}
          <div
            className="w-[48%] sm:w-[48%] lg:w-[32%]
                        flex flex-col md:flex-row md:items-center
                        text-center md:text-left gap-3"
          >
            <div
              className="w-[70px] h-[70px] mx-auto md:mx-0
                          flex items-center justify-center rounded-full
                          border-2 border-[#c79a42]"
            >
              <img src={Icon6} className="w-[38px]" />
            </div>
            <p>Hammock Garden</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;

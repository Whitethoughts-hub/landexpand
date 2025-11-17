import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const locations = [
  {
    name: "Financial District",
    info: "30min",
    map: "https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Kokapet",
    info: "32min",
    map: "https://maps.google.com/maps?q=bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Banglore Highway",
    info: "20min",
    map: "https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "ORR",
    info: "15min",
    map: "https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];

const Locations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const bigTextRef = useRef(null);

  // SCROLL ANIMATION FOR BIG TEXT
  const { scrollYProgress } = useScroll({
    target: bigTextRef,
    offset: ["start 80%", "start 10%"],
  });

  const bigX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const bigOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section className="w-full flex flex-col items-center justify-center relative overflow-hidden py-0">
      {/* HEADING SECTION */}
      <div
        ref={bigTextRef}
        className="max-w-[1300px] w-full px-5 md:px-10 flex justify-between items-end overflow-visible pb-[30px] relative"
      >
        <h2 className="text-[32px] z-20 relative mb-[10px]">
          Location Highlights
        </h2>

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
            text-right
          "
        >
          LOCATION
        </motion.h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-[1300px] pb-[100px] px-5 md:px-10 w-full">
        {/* DESKTOP */}
        <div className="hidden lg:flex gap-10">
          {/* LEFT SIDE BUTTONS */}
          <div className="w-[35%] flex flex-col gap-5">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md transition-all duration-200"
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left px-5 py-4 text-[18px] flex justify-between items-center"
                >
                  {loc.name}
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-5 pb-4 text-gray-600 text-[16px]">
                    {loc.info}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MAP */}
          <div className="w-[65%] h-[450px] rounded overflow-hidden">
            <iframe
              key={activeIndex}
              src={locations[activeIndex].map}
              className="w-full h-full"
              title="location-map"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-5 lg:hidden">
          {locations.map((loc, index) => (
            <div key={index} className="border border-gray-300 rounded-md">
              <button
                onClick={() => setActiveIndex(index)}
                className="w-full text-left px-5 py-4 text-[18px] flex justify-between items-center"
              >
                {loc.name}
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <>
                  <div className="px-5 pb-4 text-gray-600 text-[16px]">
                    {loc.info}
                  </div>

                  <div className="w-full h-[250px]">
                    <iframe
                      key={activeIndex}
                      src={loc.map}
                      className="w-full h-full"
                      title="location-map-mobile"
                      loading="eager"
                      referrerPolicy="no-referrer-when-downgrade"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      sandbox="allow-scripts allow-same-origin allow-popups"
                    ></iframe>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";

const Locations = () => {
  const sectionRef = useRef(null);
  const bigTextRef = useRef(null);

  const inView = useInView(sectionRef, { amount: 0.2, once: true });

  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // big heading scroll animation
  const { scrollYProgress } = useScroll({
    target: bigTextRef,
    offset: ["start 80%", "start 10%"],
  });

  const bigX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const bigOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Variants
  const firstGroupVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const staggerRest = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 1.05 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center relative overflow-hidden py-0"
    >
      {/* Heading */}
      <div
        ref={bigTextRef}
        className="max-w-[1300px] w-full px-5 md:px-10 flex justify-between items-end pb-[30px] relative"
      >
        <h2 className="text-[32px] font-semibold relative z-20">
          Location Highlights
        </h2>

        {/* BIG ANIMATED TEXT – unchanged style */}
        <motion.h1
          style={{ x: bigX, opacity: bigOpacity }}
          className="
            hidden md:block text-black/5 font-light select-none pointer-events-none
            text-[70px] lg:text-[140px] leading-[1] text-right
          "
        >
          LOCATION
        </motion.h1>
      </div>

      {/* CONTENT */}
      <motion.div
        className="max-w-[1300px] pb-[100px] px-5 md:px-10 w-full"
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* MAP FIRST ON MOBILE / RIGHT ON DESKTOP */}
          <motion.div
            variants={itemVariants}
            className="
              w-full lg:w-[70%] overflow-hidden lg:self-stretch
              order-1 lg:order-2
              h-[320px] md:h-[380px] lg:h-auto
            "
          >
            <iframe
              src="https://maps.google.com/maps?q=kokapet&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              title="location-map"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* CARDS NEXT */}
          <div className="w-full lg:w-[30%] flex flex-col gap-4 lg:self-stretch order-2 lg:order-1">
            <motion.div
              variants={firstGroupVariants}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={itemVariants}
                className="border border-gray-300 px-5 py-4 flex justify-between items-center"
              >
                <span className="text-[16px]">Kokapet</span>
                <span className="text-[16px] text-gray-600">30 mins</span>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerRest} className="flex flex-col gap-4">
              {[
                { name: "ORR", time: "37 mins" },
                { name: "Financial District", time: "25 mins" },
                { name: "Airport", time: "45 mins" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-gray-300 px-5 py-4 flex justify-between items-center"
                >
                  <span className="text-[16px]">{item.name}</span>
                  <span className="text-[16px] text-gray-600">{item.time}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Locations;

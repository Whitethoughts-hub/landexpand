import { motion } from "framer-motion";
import StripBg from "../assets/StripBgS.png";
const AboutUs = () => {
  return (
    <section
      className="w-full flex items-center justify-center bg-[#F1701E] bg-cover  bg-no-repeat mb-0 md:mb-[100px]"
      style={{ backgroundImage: `url(${StripBg})` }}
    >
      <div className="max-w-[1300px] px-5 md:px-10 py-[100px] flex flex-col items-center justify-center">
        {/* Heading Animation */}

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center w-full  relative strip-text leading-12"
        >
          Building the next global gateway <br /> to growth in Hyderabad
        </motion.p>
        <p className="text-white text-center pt-[10px]">
          We are in pursuit of building a futuristic city that integrates
          <br className="hidden md:block" />
          scalable infrastructure, economic growth & world-class lifestyle.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

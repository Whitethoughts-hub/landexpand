import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full flex items-center justify-center bg-[white] ">
      <div className="max-w-[1300px] px-[20px] md:px-[40px] py-[100px] flex flex-col items-center justify-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }} // start (below & hidden)
          whileInView={{ opacity: 1, y: 0 }} // end (visible & natural position)
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-[38px] pb-[20px] relative"
        >
          We are Landexpand group
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-[75%] relative"
        >
          Landexpand Group stands on a foundation of clarity, commitment, and
          long-term vision. Guided by strong values and a belief in responsible
          growth, the company approaches every opportunity with purpose and
          precision. Its work is shaped by integrity, strategic foresight, and a
          consistent focus on creating meaningful impact. With a future-ready
          mindset and a deep respect for progress, we continue to enable
          possibilities, strengthen partnerships, and expand horizons for
          generations ahead
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;

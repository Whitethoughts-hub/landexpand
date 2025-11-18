import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full flex items-center justify-center bg-[white] ">
      <div className="max-w-[1300px] px-5 md:px-10 py-[100px] flex flex-col items-center justify-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }} // start (below & hidden)
          whileInView={{ opacity: 1, y: 0 }} // end (visible & natural position)
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-[32px] pb-[20px] relative"
        >
          About Us
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center w-full md:w-[75%] relative"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis
          enim nemo sunt molestiae tenetur adipisci quasi at! Nostrum, quas
          architecto maxime nobis modi maiores at soluta corporis magnam
          numquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
          odit porro dolor tempore nesciunt aut molestiae facilis cupiditate
          assumenda optio architecto recusandae inventore nulla tenetur, quia,
          repellat quo tempora eveniet! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vero ea cupiditate perferendis deserunt quia natus
          eveniet, suscipit neque architecto explicabo? Reprehenderit architecto
          minus rerum similique natus at omnis nihil quod?
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;

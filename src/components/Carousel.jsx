import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

import Img1 from "../assets/carousel/Beside-Rajiv-Gandhi-International-Airpor.jpeg";
import Img2 from "../assets/carousel/buildings.png";
import Img3 from "../assets/carousel/Land.jpg";
import Img4 from "../assets/carousel/wide-arteria-road.jpeg";

const Carousel = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      img: Img1,
      text: "Beside Rajiv Gandhi International <br/> Airport",
    },
    {
      img: Img2,
      text: "Integrated infrastructure <br/> for business ease",
    },
    {
      img: Img3,
      text: "500-acre <br/> land parcel",
    },
    {
      img: Img4,
      text: "100 ft & 150 ft wide <br/> arterial roads",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center pb-[50px] md:py-[100px]">
      <div className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex flex-col flex-col-reverse md:flex-row gap-[50px] md:gap-6">
        {/* RIGHT CONTENT */}
        <div className="order-2 md:order-1 w-full md:w-[30%] flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[32px] md:text-left text-center leading-9"
          >
            Envisioning an integrated futuristic city in Hyderabad
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="pt-[10px] md:text-left text-center"
          >
            A new city is emerging beside RGIA (Shamshabad), one shaped by
            intention, engineered for scale, and designed for the future.
          </motion.p>
        </div>

        {/* CAROUSEL */}
        <div className="order-1 md:order-2 w-full md:w-[70%]">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={16}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
          >
            {slides.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className="relative rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={`slide-${idx}`}
                  className="w-full h-[300px] md:h-[360px] object-cover"
                />

                {/* TEXT OVERLAY */}
                <p
                  className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm md:text-base p-3 text-center"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ARROWS */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev(300)}
              className="h-[30px] w-[30px] px-2 hover:outline-[#F1701E] hover:outline-2 bg-[#F1701E] leading-7 shadow rounded text-white text-center  transition text-lg"
            >
              ←
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext(300)}
              className="h-[30px] w-[30px] px-2 hover:outline-[#F1701E] hover:outline-2  bg-[#F1701E] leading-7 shadow rounded text-white text-center transition text-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

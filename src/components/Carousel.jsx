import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Img1 from "../assets/carousel/Beside-Rajiv-Gandhi-International-Airpor.jpeg";
import Img2 from "../assets/carousel/buildings.png";
import Img3 from "../assets/carousel/Land.jpg";
import Img4 from "../assets/carousel/wide-arteria-road.jpeg";

const Carousel = () => {
  const swiperRef = useRef(null);
  const images = [Img1, Img2, Img3, Img4];

  return (
    <section className="w-full flex items-center justify-center pb-[100px]  md:py-[100px]">
      <div className="max-w-[1300px] w-full px-[20px] md:px-[40px] flex flex-col flex-col-reverse md:flex-row gap-[50px] md:gap-6">
        {/* RIGHT CONTENT (30% desktop / 100% mobile, below carousel) */}
        <div className="order-2 md:order-1 w-full md:w-[30%] flex flex-col">
          <h2 className="text-[32px] leading-9">
            Envisioning an integrated futuristic city in Hyderabad
          </h2>
          <p className="pt-[10px]">
            A new city is emerging beside RGIA (Shamshabad), one shaped by
            intention, engineered for scale, and designed for the future.
            Anchored by global connectivity and built on principles of
            innovation, sustainability, and seamless integration, it is poised
            to become Hyderabad’s next powerful economic district, where
            progress gathers momentum.
          </p>
        </div>

        {/* CAROUSEL (70% desktop / 100% mobile) */}
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
            {images.map((src, idx) => (
              <SwiperSlide key={idx} className="flex items-stretch">
                <img
                  src={src}
                  alt={`slide-${idx}`}
                  className="w-full h-[300px] md:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ARROWS */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev(300)}
              className="h-[30px] w-[30px] px-2 hover:outline-[#F1701E]  hover:outline-2 bg-[#F1701E] leading-7 shadow rounded text-white text-center  transition text-lg"
            >
              ←
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext(300)}
              className=" h-[30px] w-[30px]  px-2 hover:outline-[#F1701E] hover:outline-2  bg-[#F1701E] leading-7 shadow rounded  text-white text-center transition text-lg"
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

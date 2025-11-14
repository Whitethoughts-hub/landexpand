import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../assets/KeyBenefits/Image-1.jpg";
import Img2 from "../assets/KeyBenefits/Image-2.jpg";
import Img3 from "../assets/KeyBenefits/Image-3.jpg";

const data = [
  { img: Img1, text: "Text for Image 1" },
  { img: Img2, text: "Text for Image 2" },
  { img: Img3, text: "Text for Image 3" },
];

const KeyBenefitsCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    cssEase: "linear", // forward only
  };

  return (
    <div className="w-full max-w-[700px] mx-auto overflow-hidden py-5">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-4">
            <img
              src={item.img}
              className="w-full h-[350px] rounded-lg object-cover"
            />
            <p className="text-center mt-4 text-lg font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KeyBenefitsCarousel;

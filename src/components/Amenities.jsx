import React from "react";

import Icon1 from "../assets/Amenities/amenities-1.svg";
import Icon2 from "../assets/Amenities/amenities-1.svg";
import Icon3 from "../assets/Amenities/amenities-1.svg";
import Icon4 from "../assets/Amenities/amenities-1.svg";
import Icon5 from "../assets/Amenities/amenities-1.svg";
import Icon6 from "../assets/Amenities/amenities-1.svg";

const Amenities = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="max-w-[1300px] pb-[100px] px-5 md:px-10 w-full">
        <h1 className="text-[32px] text-left pb-10">Amenities</h1>

        {/* FLEX WRAP container */}
        <div className="flex flex-wrap justify-between gap-y-12">
          {/* Row Items */}

          {/* 1 */}
          <div className="flex items-center gap-5 w-full sm:w-[48%] lg:w-[32%]">
            <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-[#c79a42]">
              <img src={Icon1} className="w-[38px]" />
            </div>
            <p>Swimming Pool</p>
          </div>

          {/* 2 */}
          <div className="flex items-center gap-5 w-full sm:w-[48%] lg:w-[32%]">
            <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-[#c79a42]">
              <img src={Icon2} className="w-[38px]" />
            </div>
            <p>Senior citizens’ cove</p>
          </div>

          {/* 3 */}
          <div className="flex items-center gap-5 w-full sm:w-[48%] lg:w-[32%]">
            <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-[#c79a42]">
              <img src={Icon3} className="w-[38px]" />
            </div>
            <p>Party Lawn</p>
          </div>

          {/* 4 */}
          <div className="flex items-center gap-5 w-full sm:w-[48%] lg:w-[32%]">
            <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-[#c79a42]">
              <img src={Icon4} className="w-[38px]" />
            </div>
            <p>Outdoor Play Area</p>
          </div>

          {/* 5 */}
          <div className="flex items-center gap-5 w-full sm:w-[48%] lg:w-[32%]">
            <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-[#c79a42]">
              <img src={Icon5} className="w-[38px]" />
            </div>
            <p>Kids' Play Area</p>
          </div>

          {/* 6 */}
          <div className="flex items-center gap-5 w-full sm:w-[48%] lg:w-[32%]">
            <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-[2px] border-[#c79a42]">
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

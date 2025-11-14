import React, { useState } from "react";

const locations = [
  {
    name: "Lorem City",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris sit amet lorem.",
    map: "https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Ipsum Town",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt arcu vel risus.",
    map: "https://maps.google.com/maps?q=bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Dolor Village",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo non.",
    map: "https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Sit Amet Region",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.",
    map: "https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    name: "Consectetur Place",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet dolor nec.",
    map: "https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];

const Locations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* SAME OUTER CSS AS AMENITIES */}
      <div className="max-w-[1300px] pb-[100px] px-5 md:px-10 w-full">
        <h1 className="text-[32px] text-left pb-10">Lorem Ipsum Locations</h1>

        {/* DESKTOP */}
        <div className="hidden lg:flex gap-10">
          {/* LEFT LIST */}
          <div className="w-[35%] flex flex-col gap-5">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md transition-all duration-200"
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left px-5 py-4 font-medium text-[20px] flex justify-between items-center"
                >
                  {loc.name}
                  <span className="text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-5 pb-4 text-gray-600">{loc.info}</div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT MAP */}
          <div className="w-[65%] h-[450px] border rounded-md overflow-hidden">
            <iframe
              key={activeIndex}
              src={locations[activeIndex].map}
              className="w-full h-full"
              title="location-map"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-5 lg:hidden">
          {locations.map((loc, index) => (
            <div key={index} className="border border-gray-300 rounded-md">
              <button
                onClick={() => setActiveIndex(index)}
                className="w-full text-left px-5 py-4 font-medium text-[20px] flex justify-between items-center"
              >
                {loc.name}
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <>
                  <div className="px-5 pb-4 text-gray-600">{loc.info}</div>

                  <div className="w-full h-[250px] border-t">
                    <iframe
                      key={activeIndex}
                      src={loc.map}
                      className="w-full h-full"
                      title="location-map-mobile"
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

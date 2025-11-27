import React, { useRef, useEffect, useState } from "react";
import BannerVideoDesktop from "../assets/BannerC.mp4";
import BannerVideoMobile from "../assets/MobileBanner.mp4"; // your mobile video
import Navbar from "../components/header";
const Banner = () => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black ">
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={isMobile ? BannerVideoMobile : BannerVideoDesktop}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          min-w-full min-h-full
         object-cover
        "
      />

      {/* OVERLAY CONTENT */}
      <div
        className=" 
          absolute top-0 bottom-4 left-0 w-full
          flex justify-between flex-col items-center
         
          z-10
          pt-[20px] 
        "
      >
        <Navbar />
        <p className="w-full max-w-[1300px]  px-[20px] md:px-[40px] text-white font-size-40 leading-6">
          The next landmark <br />
          in India’s urban evolution
        </p>
      </div>
    </section>
  );
};
export default Banner;

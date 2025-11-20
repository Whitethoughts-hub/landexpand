import BannerVideoMobile from "../assets/BannerS.mp4";
import BannerVideoDesktop from "../assets/MobileBanner.mp4";
import Header from "../components/header";

const Banner = () => {
  return (
    <section className="relative w-full h-screen bg-[#f0f0f0] overflow-hidden">
      <div className="relative w-full h-full px-5 md:px-10">
        {/* Video Background */}
        <video
          className="
    absolute top-1/2 left-1/2
    min-w-full min-h-full
    -translate-x-1/2 -translate-y-1/2
    object-cover pointer-events-none
  "
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-video-player-type="h5"
          x5-video-orientation="portraint"
          x-webkit-airplay="allow"
          preload="auto"
        >
          <source
            src={BannerVideoDesktop}
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <source
            src={BannerVideoMobile}
            type="video/mp4"
            media="(max-width: 767px)"
          />
          Your browser does not support the video tag.
        </video>
        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col justify-between items-center">
          <div className="max-w-[1300px] z-50">
            <Header />
          </div>

          <div className="w-full max-w-[1300px] flex items-center mb-[20px] px-[20px] md:px-[40px]">
            <p className="w-[300px] text-white font-size-40 leading-6">
              The next landmark <br />
              in India’s urban evolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

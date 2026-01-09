import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import LandImages from "../components/LandImages";
import ScrollToTop from "../components/ScrollToTopButton";
import Strip from "../components/Strip";
import TwoImgCarousel from "../components/Carousel";
import TwoImgCarouselHeading from "../components/BigTextHeading";
const main = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      {/* <TwoImgCarouselHeading title="" bigText="KEY BENEFITS" /> */}
      <TwoImgCarousel />
      {/* <TwoImgCarouselHeading
        title={
          <>
            An airport-centric <br className="hidden md:block" />
            ecosystem ready for the future
          </>
        }
        bigText="INSPIRATION"
      /> */}
      <LandImages />
      <Strip />
      {/* <TwoImgCarouselHeading title="" bigText="CONTACT US" /> */}
      <ContactUs />
      <ScrollToTop />
    </>
  );
};

export default main;

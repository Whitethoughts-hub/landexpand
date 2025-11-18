import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import KeyBenefits from "../components/KeyBenefits";
import Amenities from "../components/Amenities";
import Locations from "../components/Locations";
import Form from "../components/Form";
import ScrollToTop from "../components/ScrollToTopButton";
import LocationNormal from "../components/LocationNormal";
const main = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <KeyBenefits />
      <Amenities />
      <LocationNormal />
      <Form />
      <ScrollToTop />
    </>
  );
};

export default main;

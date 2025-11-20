import Img3 from "../assets/KeyBenefits/Mallsandlifestyl.jpeg";
import Img2 from "../assets/KeyBenefits/commercial-hubs.png";
import Img1 from "../assets/KeyBenefits/Residentialhubs.jpg";
import Img4 from "../assets/KeyBenefits/healthcare-hospitalit.jpeg";

const FourShowcase = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="max-w-[1300px] w-full px-[20px] md:px-[40px] pb-[100px] md:py-[100px]  flex flex-col md:flex-row flex-wrap gap-6 md:gap-4 justify-center md:justify-between">
        {/* ITEM 1 */}{" "}
        <h2 className="text-[32px] w-full text-left md:hidden block">
          An airport-centric ecosystem ready for the future
        </h2>
        <div className="w-full sm:w-[48%] md:w-[23%] flex flex-col items-center gap-3">
          <img
            src={Img1}
            alt="Residential hubs"
            className="rounded-lg transition-transform duration-300 hover:scale-105 w-full h-[350px] object-cover"
          />
          <p className="text-center font-size-40">RESIDENTIAL HUBS</p>
        </div>
        {/* ITEM 2 */}
        <div className="w-full sm:w-[48%] md:w-[23%] flex flex-col items-center gap-3">
          <img
            src={Img2}
            alt="Commercial corridors"
            className="rounded-lg transition-transform duration-300 hover:scale-105 w-full h-[350px] object-cover"
          />
          <p className="text-center font-size-40">COMMERCIAL CORRIDORS</p>
        </div>
        {/* ITEM 3 */}
        <div className="w-full sm:w-[48%] md:w-[23%] flex flex-col items-center gap-3">
          <img
            src={Img3}
            alt="Malls & lifestyle"
            className="rounded-lg transition-transform duration-300 hover:scale-105 w-full h-[350px] object-cover"
          />
          <p className="text-center font-size-40">MALLS & LIFESTYLE</p>
        </div>
        {/* ITEM 4 */}
        <div className="w-full sm:w-[48%] md:w-[23%] flex flex-col items-center gap-3">
          <img
            src={Img4}
            alt="Hospitality & Healthcare"
            className="rounded-lg transition-transform duration-300 hover:scale-105 w-full h-[350px] object-cover"
          />
          <p className="text-center font-size-40 ">HOSPITALITY & HEALTHCARE</p>
        </div>
      </div>
    </section>
  );
};

export default FourShowcase;

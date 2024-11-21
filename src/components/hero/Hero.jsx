import React from "react";
import Image from "../../assets/img/Homepage.webp";
// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        {/* Hero text */}
        <div className="flex-1">
          {/* badge test */}
          <div
            className="bg-slate-200 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-between text-sm lg:text-base">
              <div className="bg-white text-darkblue rounded-full p-1 px-4 font-medium">
                75% SAVE
              </div>
              <div>For the Black Friday weekend</div>
            </div>
          </div>
          {/* title */}
          <h3
            className="text-[32px] lg:text-[64px] leading-tight mb-6 "
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Trade CFDs, Matels, Indices & Stocks in a Single Account
          </h3>
          <p
            className="max-w-[440px] leading-relaxed mb-8"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            your portfolio and&nbsp; access multiple markets through one
            platform for a seamless trading experience.
          </p>
          <button
            className="px-6 py-2 rounded-full text-white text-sm lg:h-16 lg:text-base font-bold gap-x-6"
            style={{ background: "#0faf93" }}
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <div className="flex items-center justify-betweeen gap-2">
              START TRADING
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </div>
          </button>
        </div>
        {/* Hero image flex-col2nd element */}
        <div className="flex-1">
          <img
            src={Image}
            alt="banner"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

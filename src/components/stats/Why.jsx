import React from "react";
import Image from "../../assets/img/why-img.png";

const Why = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-x-8">
          {/* image */}
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={Image} alt="casset" />
          </div>
          {/* text */}
          <div
            className="order-1 lg:order-2 max-w-[480px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="section-title">
              Your Trading Advantages with GainX
            </h2>
            <p className="section-subtitle">
              There are no limits for brokerage company GainX when it comes to
              providing outstanding benefits to clients
            </p>
            <button className="btn px-6">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;

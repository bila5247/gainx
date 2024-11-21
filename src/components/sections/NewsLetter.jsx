import React from "react";
import NewsLetterForm from "./NewsLetterForm";

const NewsLetter = () => {
  return (
    <section
      className="py-[40px] lg:py-[88px] bg-newsletter bg-cover"
      style={{ background: "#fff" }}
    >
      <div className="container mx-auto ">
        <div
          className="flex flex-col lg:flex-row items-center justify-between  p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[300px] text-white"
          style={{ background: "#0faf93" }}
          data-aos="fade-up"
          data-aos-offset="400"
        >
          {/* text */}
          <div className="flex-1 w-full">
            <h3 className="h3 mb-4">Partnership Built Around You</h3>
            <p className="max-w-[500px] ">
              At Gain X, we believe in empowering our partners by offering
              flexible and tailored partnership plans that align perfectly with
              your business goals.
            </p>
            <p className="max-w-[500px] mb-8">
              {" "}
              Whether you're an individual, a corporation, or a service
              provider, our customizable solutions ensure you have the tools and
              resources needed to succeed on your own terms.
            </p>
          </div>
          <NewsLetterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

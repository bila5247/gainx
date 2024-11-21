import React from "react";

const NewsLetterForm = () => {
  return (
    <form className="flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10">
      <button
        className="btn bg-white text-darkblue px-8 "
        style={{ background: "#fff" }}
      >
        IB DASHBOARD LOGIN
      </button>
      <button
        className="btn bg-white text-darkblue px-8 "
        style={{ background: "#fff" }}
      >
        IB REGISTRATION
      </button>
    </form>
  );
};

export default NewsLetterForm;

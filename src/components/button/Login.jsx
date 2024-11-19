import React from "react";

const Login = () => {
  return (
    <div className="flex items-center font-medium">
      {/* link button */}
      <a
        href="#/"
        className="py-2  px-8 hover:bg-blue-600 text-white rounded-full text-base "
        style={{ background: "#0faf93" }}
      >
        Login
      </a>
      {/* Seperator */}
      <span className="mx-6 text-slate-300 font-thin">|</span>
      {/* Register button */}
      <button
        className="py-2  px-8 hover:bg-blue-600 text-white rounded-full text-base "
        style={{ background: "#0faf93" }}
      >
        Register
      </button>
    </div>
  );
};

export default Login;

import React from "react";

//adding up componenents
import Logo from "../../assets/img/gainxplus.png";
import Nav from "../nav/Nav";
import AccountBtns from "../button/AccountBtns";

//import icons
import { CgMenuRight, CgmenuRight } from "react-icons/cg";

const Header = ({ setNavMobile }) => {
  //to open open drawer
  const handleClick = () => {
    setNavMobile(true);
  };

  return (
    <header
      // className="py-[20px] lg:pt-[50px]"
      style={{ background: "#000", paddingTop: "5px", paddingBottom: "5px" }}
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="#/">
          <img style={{ width: "150px" }} src={Logo} alt="logo" />
        </a>
        {/* Nav butttons */}
        <div className="hidden lg:flex gap-x-[55px]" style={{ color: "#fff" }}>
          <Nav />
          <AccountBtns />
        </div>
        {/* Open nav button */}
        <div onClick={handleClick} className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;

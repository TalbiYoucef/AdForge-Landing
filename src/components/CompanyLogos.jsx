import React from "react";
import logo_left from "../assets/logo_left.svg";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo_right from "../assets/logo_right.svg";

const CompanyLogos = () => {
  return (
    <div className="flex flex-row space-x-4 xs:space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-16 xl:space-x-24 2xl:space-x-36 [2560px]:space-x-48 [3840px]:space-x-64 py-10 xs:py-12 sm:py-16">
      <a
        href="https://www.axn.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={logo_left}
          alt="Lenovo Logo"
          className="h-12 xs:h-14 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>
      <a href="https://www.lenovo.com/us/en/" target="_blank" rel="noopener noreferrer">
        <img
          src={logo1}
          alt="Slack Logo"
          className="h-12 xs:h-14 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>
      <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
        <img
          src={logo2}
          alt="YouTube Logo"
          className="h-12 xs:h-14 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img
          src={logo3}
          alt="Amazon Logo"
          className="h-12 xs:h-14 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>
      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
        <img
          src={logo4}
          alt="Google Logo"
          className="h-12 xs:h-14 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img
          src={logo5}
          alt="Microsoft Logo"
          className="h-12 xs:h-14 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>
      <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
        <img
          src={logo_right}
          alt="Logo"
          className="h-12 xs:h-14 sm:h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
        />
      </a>
    </div>
  );
};

export default CompanyLogos;

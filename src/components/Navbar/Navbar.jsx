import React, { useState } from "react";
import Logo from "../../asset/Logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[90%] mx-auto pt-[40px] pb-[40px]">
      <div
        className={`"text-[30px]  flex-grow items-center lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-[40%]">
          <img src={Logo} />
        </div>
        <div className="text-[14px] mx-auto w-[50%] text-[#100D1F] lg:flex-grow">
          <a
            href="#"
            className="block inter font-medium mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
           Products
          </a>
          <a
            href="#"
            className="block inter font-medium mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Solution
          </a>
          <a
            href="#"
            className="block inter font-medium mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
           FAQs
          </a>
         
        </div>
        <div>
          <button className="inline-flex items-center font-medium text-[12px] bg-[#6F43CD] rounded-[40px] border-0 py-3 px-5 text-white">
            Book Demo 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

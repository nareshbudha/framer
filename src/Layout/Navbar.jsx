import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import nepallogo from "../Components/assets/Image/flag.gif";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky top-0 z-50" : ""}`}>
      <nav className="bg-[#265CC0] p-4">
        <div className="flex gap-10 tabletmd:justify-around items-center laptop:justify-between laptop:px-10">
          {/* <div className="text-white text-xl font-bold"> <img
            className="hidden tablet:block tablet:max-w-5 tablet:h-aut 0"
            src={nepallogo}
            alt="Logo"
          /></div> */}
          <div className="text-white hidden tablet:flex space-x-4">
            <Link to={"/"} className="text-base flex text-[#fff]">
              गृह पृष्ठ
            </Link>
            <Link to={"/about-us"} className=" flex text-base gap-1 text-[#fff]">
              हाम्रो बारेमा <IoIosArrowDown className="mt-1"/>
              
            </Link>
            <Link to={"/news"} className="flex gap-1 text-base text-[#fff]">
              सूचना तथा समाचार <IoIosArrowDown className="mt-1"/>
            </Link>
          </div>
          <div className="hidden tablet:flex space-x-4 ">
          <button className="">
            <Link
              to={"/admin/farmer-information"}
              className="block text-white bg-[#FF0000] rounded  py-1 px-4 hover:bg-gray-700"
            >
              दर्ता गर्नुहोस्
            </Link>
          </button>
          <button>
            <Link
              to={"/login"}
              className="block text-white bg-[#FF0000] rounded py-1 px-4 hover:bg-gray-700"
            >
              लग-इन गर्नुहोस्
            </Link>{" "}
          </button>
          </div>
          <div className="tablet:hidden" onClick={toggleMenu}>
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`tablet:hidden ${isOpen ? "block" : "hidden"}`}>
          <Link
            to={"/"}
            className="block text-white py-2 px-4 hover:bg-gray-700"
          >
            गृह पृष्ठ
          </Link>
          <Link
            to={"/about-us"}
            className="flex gap-1 text-white py-2 px-4 hover:bg-gray-700"
          >
            हाम्रो बारेमा <IoIosArrowDown className="mt-1"/>
          </Link>
          <Link
            to={"/news"}
            className="flex gap-1 text-white py-2 px-4 hover:bg-gray-700"
          >
            सूचना तथा समाचार <IoIosArrowDown className="mt-1"/>
          </Link>
          <Link
            to={"/news"}
            className="block text-white py-2 px-4 hover:bg-gray-700"
          >
            दर्ता गर्नुहोस्
          </Link>
          <Link
            to={"/login"}
            className="block text-white py-2 px-4 hover:bg-gray-700"
          >
            लग-इन गर्नुहोस्
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

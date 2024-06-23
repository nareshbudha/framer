import React from "react";
import { FaUserTie } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import nepalflag from "../../assets/Image/flag.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#3c8dbc] text-white">
      <nav className="flex justify-between items-center px-3" style={{height:'70px'}}>
        {/* <Link to={"/"}>
          <img className="h-10" src={nepalflag} alt="Logo" />
        </Link> */} <h1 className="flex justify-center items-center text-4xl font-bold text-red-600">  बीरेन्द्रनगर नगरपालिका कृषि विभाग</h1>

        <div className="flex gap-3">
          <button className="flex items-center gap-1 bg-red-500 py-1 px-2 rounded text-sm font-bold md:py-3 md:px-3 md:text-base">
            <RiLogoutCircleRFill className="mt-1" />
            <span className="hidden md:inline">Log Out (बाहिर निस्कनु)</span>
          </button>
          <button className="flex items-center gap-1 bg-blue-500 shadow-md py-2 px-2 rounded text-sm font-bold md:py-3 md:px-3 md:text-base">
            <FaUserTie />
            <span className="hidden md:inline">व्यवस्थापक प्रोफाइल</span>
          </button>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
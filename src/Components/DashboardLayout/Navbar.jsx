import React from "react";
import { FaUserTie } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import nepalflag from "../assets/Image/flag.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col ">
      <nav className="bg-[#3c8dbc] text-white h-[90px] px-3  flex justify-between">
        <Link to={"/"}>
          <img className="mt-5" src={nepalflag} alt="Logo" />
        </Link>

        <div className="flex">
          <ul className="flex   ">
            <li className="flex flex-col gap-1 p-2 tablet:flex-row tablet:gap-10 tablet:p-5">
              <button className=" bg-red-500 flex relative  py-1  rounded  tablet:gap-3 tablet:px-2 tablet:py-3   tablet:font-bold  tablet:rounded-lg ">
                <RiLogoutCircleRFill className="mt-1" />
                <p className="text-sm tablet:text-base"></p> Log Out(बाहिर
                निस्कनु)
              </button>
              <button className=" text-[#FFFFFF] bg-blue-500 shadow-md flex relative px-1 py-2 text-sm rounded gap-1 tablet:gap-3 tablet:px-2 tablet:py-3  tablet:text-base font-bold  tablet:rounded-lg ">
                <FaUserTie />
                व्यवस्थापक प्रोफाइल
              </button>
            </li>
          </ul>
        </div>
      </nav>
 
    </div>
  );
};

export default Navbar;

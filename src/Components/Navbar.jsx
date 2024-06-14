import React from "react";
import { FaUserTie } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import BarChart from "@canvasjs/charts";
import Bar from "./Bar";
import nepalflag from "../Components/assets/Image/flag.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col ">
      <nav className="bg-[#3c8dbc] text-white h-auto px-3 ml-[102px]  flex justify-between">
        <Link to={"/"}>
          <img className="mt-5" src={nepalflag} alt="Logo" />
        </Link>

        <div className="flex-1 flex justify-end tablet:px-20">
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
      <Bar />
      {/* <div className="flex flex-col tablet:flex-row mt-2 gap-5">
        <button className="bg-[#f59d13cc] rounded flex gap-2 p-2">पूर्ण विवरण: <p className="rounded-2xl bg-[#274e23] px-2 py-1">1000</p></button>
        <button className="bg-[#f59d13cc] rounded p-2">पूर्ण विवरण</button>

        <button className="bg-[#f59d13cc] rounded p-2">पूर्ण विवरण</button>

        <button className="bg-green-500 rounded p-2">पूर्ण विवरण</button>

        <button className="bg-green-500 rounded p-2">पूर्ण विवरण</button>


      </div> */}
    </div>
  );
};

export default Navbar;

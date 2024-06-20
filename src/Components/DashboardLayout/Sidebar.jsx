import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserTie, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { MdAddHome, MdNewspaper } from "react-icons/md";
import { FaChevronLeft, FaUsersGear } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { CiCircleAlert } from "react-icons/ci";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="bg-[#4276a4] flex flex-col justify-center items-center tablet:justify-start tablet:items-start p-2 gap-5"
      style={{ height: "calc(100vh - 90px)" }}
    >
      <h1 className="text-base font-bold tablet:text-lg tabletmd:text-xl text-white">
        बीरेन्द्रनगर नगरपालिका कृषि विभाग
      </h1>
      <ul className="flex flex-col text-white">
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md cursor-pointer">
          <FaUserTie />
          <NavLink
            to={"/admin/dashboard"}
            className="text-xs tablet:text- tabletmd:text-base"
            activeClassName="text-white"
          >
            ड्यासबोर्ड
          </NavLink>
        </li>
        <li className="flex gap-3 items-center hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <AiOutlineUsergroupAdd />
          <p className="text-xs tablet:text- tabletmd:text-base">
            किसान सूचीकरण प्रणाली
          </p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <VscFeedback />
          <p className="text-xs tablet:text- tabletmd:text-base">
            किसानको प्रतिक्रिया
          </p>
        </li>
        <li className="flex flex-col gap-2 items-start hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <div
            className="flex gap-1 items-center w-full"
            onClick={handleDropdownToggle}
          >
            <FaHouseUser />
            <p className="text-xs tablet:text- tabletmd:text-base">
              वडा अनुसार स्वीकृत पर्खँदै
            </p>
            {isDropdownOpen ? <FaChevronDown /> : <FaChevronLeft />}
          </div>
          {isDropdownOpen && (
            <ul className="w-full gap-1 flex flex-col justify-center ">
              <li className="bg-red-500 px-2 py-1 rounded-md">
                <NavLink
                  to={"/one"}
                  className="flex gap-2 items-center"
                  activeClassName="text-white"
                >
                  <CiCircleAlert />
                  <p>वार्ड नम्बर 1</p>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <FaUserTie />
          <p className="text-xs tablet:text- tabletmd:text-base">
            वडा अनुसार जम्मा संख्या
          </p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <MdAddHome />
          <p className="text-xs tablet:text- tabletmd:text-base">
            गणकद्वारा भरिएको विवरण
          </p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <FaUserTie />
          <p className="text-xs tablet:text- tabletmd:text-base">
            किसानलाई सूचना पठाउनुहोस्
          </p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <FaUsersGear />
          <NavLink
            to={"/admin/farmer-information"}
            className="text-xs tablet:text- tabletmd:text-base"
            activeClassName="text-white"
          >
            किसान
          </NavLink>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md  cursor-pointer">
          <MdNewspaper />
          <p className="text-xs tablet:text-sm tabletmd:text-base">
            सूचना तथा समाचार
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
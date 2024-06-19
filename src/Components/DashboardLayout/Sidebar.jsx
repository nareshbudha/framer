import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { FaHouseUser } from "react-icons/fa";
import { MdAddHome, MdNewspaper } from "react-icons/md";
import { FaChevronLeft, FaUsersGear } from "react-icons/fa6";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownOptions = [
    "वार्ड नम्बर 1",
    "वार्ड नम्बर 2",
    "वार्ड नम्बर 3",
    "वार्ड नम्बर 4",
    "वार्ड नम्बर 5",
    "वार्ड नम्बर 6",
    "वार्ड नम्बर 7",
    "वार्ड नम्बर 8",
    "वार्ड नम्बर 9",
    "वार्ड नम्बर 10",
    "वार्ड नम्बर 11",
    "वार्ड नम्बर 12",
    "वार्ड नम्बर 13",
    "वार्ड नम्बर 14",
    "वार्ड नम्बर 15",
    "वार्ड नम्बर 16"
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#4276a4] flex flex-col justify-center items-center tablet:justify-start tablet:items-start p-2 gap-5" style={{ height: "calc(100vh - 90px)" }}>
      <h1 className="text-base font-bold tablet:text-lg tabletmd:text-xl text-white">
        बीरेन्द्रनगर नगरपालिका कृषि विभाग
      </h1>
      <ul className="flex flex-col text-white">
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaUserTie />
          <p className="text-xs tablet:text- tabletmd:text-base">ड्यासबोर्ड</p>
        </li>
        <li className="flex gap-3 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <AiOutlineUsergroupAdd />
          <p className="text-xs tablet:text- tabletmd:text-base">किसान सूचीकरण प्रणाली</p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <VscFeedback />
          <p className="text-xs tablet:text- tabletmd:text-base">किसानको प्रतिक्रिया</p>
        </li>
        <li className="flex flex-col gap-2 items-start hover:bg-[#335b83] py-2 px-1 rounded-md">
          <div className="flex gap-2 items-center w-full" onClick={handleDropdownToggle}>
            <FaHouseUser />
            <p className="text-xs tablet:text- tabletmd:text-base">वडा अनुसार स्वीकृत पर्खँदै</p>
            {isDropdownOpen ? <FaChevronDown /> : <FaChevronLeft />}
          </div>
          {isDropdownOpen && (
            <ul className=" w-fit bg-[#335b83] text-white rounded-md shadow-lg">
              {dropdownOptions.map((option, index) => (
                <li key={index} className="hover:bg-[#4276a4] py-1 px-2 rounded-md">
                  {option}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaUserTie />
          <p className="text-xs tablet:text- tabletmd:text-base">वडा अनुसार जम्मा संख्या</p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <MdAddHome />
          <p className="text-xs tablet:text- tabletmd:text-base">गणकद्वारा भरिएको विवरण</p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaUserTie />
          <p className="text-xs tablet:text- tabletmd:text-base">किसानलाई सूचना पठाउनुहोस्</p>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaUsersGear />
          <Link to={"/admin/farmer-information"}>
            <p className="text-xs tablet:text- tabletmd:text-base">किसान</p>
          </Link>
        </li>
        <li className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <MdNewspaper />
          <p className="text-xs tablet:text-sm tabletmd:text-base">सूचना तथा समाचार</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

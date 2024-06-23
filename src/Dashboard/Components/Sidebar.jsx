import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import {
  FaChevronLeft,
  FaDeviantart,
  FaDiceTwo,
  FaNapster,
  FaNewspaper,
  FaPeopleArrows,
  FaPlantWilt,
  FaUserGroup,
  FaUsersGear,
} from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { CiCircleAlert } from "react-icons/ci";


const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="bg-[#4276a4] flex flex-col justify-center items-center md:justify-start md:items-start p-2 gap-2 "
      style={{ height: "100vh" }}
    >
      <h1 className="text-xl font-semibold  md:text-lg lg:text-xl text-white text-center md:text-left"></h1>
      <div className="flex flex-col text-white w-full gap-10">
        <div className="flex gap-2 items-center hover:bg-[#335b83] font-semibold py-2 px-1 rounded-md">
          <FaUserTie />
          <Link to={"/admin/dashboard"} className="text-xl  w-full">
            ड्यासबोर्ड
          </Link>
        </div>
        <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md font-semibold">
          <FaNapster />
          <p className="text-xl  w-full">हाम्रो वारेमा</p>
        </div>
        <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaNewspaper />
          <p className="text-xl font-semibold w-full">सूचना तथा समाचार</p>
        </div>
        <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
        <FaPlantWilt />
          <Link to={"/add-cropselection"}>
         
            <p className="text-xl font-semibold w-full">बाली वर्गीकरण र नाम</p>
          </Link>
        </div>
        <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaUserGroup />
          <Link
            to={"/admin/farmer-information"}
            className="text-xl font-semibold w-full"
          >
            किसान
          </Link>
        </div>
        {/* <div className="flex gap-3 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <AiOutdivneUsergroupAdd />
          <p className="text-xl font-semibold w-full">
            किसान सूचीकरण प्रणाली
          </p>
        </div>
        <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <VscFeedback />
          <p className="text-xl font-semibold w-full">
            किसानको प्रतिक्रिया
          </p>
        </div> */}
        <div className="flex flex-col gap-2 items-start hover:bg-[#335b83] py-2 px-1 cursor-pointer rounded-md w-full">
          <div
            className="flex gap-1 items-center w-fit"
            onClick={handleDropdownToggle} >
            <FaHouseUser />
            <p className="text-xl font-semibold w-fit ">
              वडा अनुसार जम्मा संख्या
            </p>
            {isDropdownOpen ? <FaChevronDown  /> : <FaChevronLeft />}
          </div>
          {isDropdownOpen && (
            <ul className=" gap-1 flex flex-col justify-center">
              <div className="bg-red-500 px-2 py-1 rounded-md">
                <Link to={"/one"} className="flex gap-2 items-center">
                  <CiCircleAlert />
                  <p>वार्ड नम्बर 1</p>
                </Link>
              </div>
            </ul>
          )}
        </div>
        {/* <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaUserTie />
          <p className="text-xl font-semibold w-full">
          वडा अनुसार स्वीकृत पर्खँदै
          </p>
        </div> */}
        <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaDiceTwo />
          <p className="text-xl font-semibold w-full">गणकद्वारा भरिएको विवरण</p>
        </div>
        {/* <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaUserTie />
          <p className="text-xl font-semibold w-full">
            किसानलाई सूचना पठाउनुहोस्
          </p>
        </div> */}

        <div className="flex gap-2 items-center hover:bg-[#335b83] py-2 px-1 rounded-md">
          <FaPeopleArrows />
          <p className="text-xl font-semibold w-full">भूमिका तथा अनुमति</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

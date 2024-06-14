import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa6";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { FaHouseUser } from "react-icons/fa";
import { MdAddHome, MdNewspaper } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className=" bg-[#4276a4] fixed h-full  px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className="text-sm font-bold tablet:text-base tabletmd:text-xl text-white">बीरेन्द्रनगर नगरपालिका कृषि विभाग</h1>
      </div>
      
      <ul className="mt-8 flex flex-col gap-3 text-white text-base ">
    
        <li className="flex gap-3">
            <FaUserTie />
            <p className="text-xs tablet:text-sm tabletmd:text-base">  ड्यासबोर्ड</p>
          
        </li>
        <hr />
        <li className="flex gap-3 ">
            <AiOutlineUsergroupAdd />
           <p className="text-xs tablet:text-sm tabletmd:text-base">किसान सूचीकरण प्रणाली </p>
        </li>
        <hr />
        <li className="flex gap-3">
            <VscFeedback />
            <p className="text-xs tablet:text-sm tabletmd:text-base"> किसानको प्रतिक्रिया  </p>
   
        </li>
        <hr />
        <li className="flex gap-3">
            <FaHouseUser />
            <p className="text-xs tablet:text-sm tabletmd:text-base">  वडा अनुसार स्वीकृत पर्खँदै </p>
           
        </li>
        <hr />
        <li className="flex gap-3">
            <FaUserTie />
            <p className="text-xs tablet:text-sm tabletmd:text-base">  वडा अनुसार जम्मा संख्या  </p>
            
        </li>
        <hr />
        <li className="flex gap-3">
            <MdAddHome />
            <p className="text-xs tablet:text-sm tabletmd:text-base"> गणकद्वारा भरिएको विवरण  </p>
            
        </li>
        <hr />
        <li className="flex gap-3">
            <FaUserTie />
            <p className="text-xs tablet:text-sm tabletmd:text-base">   किसानलाई सूचना पठाउनुहोस्    </p>
          
        </li>
        <hr />
        <li className="flex gap-3">
            <FaUsersGear/>
            <p className="text-xs tablet:text-sm tabletmd:text-base">   किसान  </p>
            
        </li>
        <hr />
        <li className="flex gap-3">
        <MdNewspaper />
            <p className="text-xs tablet:text-sm tabletmd:text-base"> सूचना तथा समाचार   </p>
            
        </li>
        <hr />
        <li className="flex gap-3">
          <FaHouseUser/>
          <Link  className="text-xs tablet:text-sm tabletmd:text-base">भूमिकाहरू</Link>
        </li>
        <hr />
        
      </ul>
    </div>
  );
};

export default Sidebar;

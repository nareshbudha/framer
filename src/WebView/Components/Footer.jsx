import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaXTwitter,
  FaGreaterThan,
} from "react-icons/fa6";
import { MdEmail, MdEditLocation } from "react-icons/md";

import { IoIosCall } from "react-icons/io";

import logoImage from "../../assets/Image/Logo BNM.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  const today = new Date();
  return (
    <div className="w-full  ">
      <div className="bg-[#265CC0] flex flex-col mobile:py-10 mobile:gap-10 tablet:flex-col tablet:gap-5 tablet:px-10 tabletmd:flex-row ">
        <div className=" flex flex-col p-3 gap-3 flex-1 mobile:gap-10 mobile:justify-evenly tabletmd:max-w-[30%] ">
          <img 
            className=" w-32 "
            src={logoImage}
            alt="Logo"
            
          />
          <p className="text-white items-center mobile:mx-3 font-light desktop:text-justify">
            कर्णाली प्रदेशको राजधानीका रुपमा रहेको यस वीरेन्द्रनगर नगरपालिकाको
            स्थापना वि.सं. २०३३ सालमा सुर्खेत उपत्यका भित्र पर्ने कटकुवा,
            गोठीकाडा र जर्बुटा गाउ पञ्चायत भित्र पर्ने केही भागलाई मिलाएर
            वीरेन्द्रनगर नगरपञ्चायतका रुपमा भएकोमा नेपाल सरकारको मिति २०७१।०१।२५
            गतेको निर्णय बमोजिम साविकका छिमेकी उत्तरगंगा र लाटिकोइली गाविस तथा
         
          </p>
          <div className="flex mx-auto gap-3   tablet:flex tablet:w-full ">
            <FaSquareInstagram className="text-white text-3xl" />
            <FaFacebook className="text-white text-3xl " />
            <FaLinkedin className="text-white text-3xl " />
            <FaXTwitter className="text-white text-3xl " />
          </div>
        </div>
        <div className="flex flex-col mobile:flex-row mobile:gap-2 mobile:flex-wrap mobile:justify-between  p-3   tablet:flex-row  tabletmd:max-w-[70%] tabletmd:w-full">
          <div className="flex flex-col  mobile:gap-1  ">
            <h2 className="text-2xl text-white tablet:text-xl tablet:font-medium ">
              अन्य लिङ्क
            </h2>
            <Link to={"/login"} className="text-white flex gap-1 text-base font-light hover:font-bold">
              <FaGreaterThan className="w-2"/> हाम्रो बारेमा
            </Link>
            <p className="text-white text-base font-light hover:font-bold">
              संगठनात्मक संरचना
            </p>
            <p className="text-white text-base font-light hover:font-bold ">
              संगठनात्मक संरचना
            </p>
            <p className="text-white text-base font-light hover:font-bold">
              संगठनात्मक संरचना
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl text-white  tablet:text-xl tablet:font-medium ">
          
              विधुतीय शुसासन सेवा
            </h2>
            <p className="text-white text-base font-light hover:font-bold  ">
              घटना दर्ता
            </p>
            <p className="text-white text-base font-light hover:font-bold">
              घटना दर्ता
            </p>
            <p className="text-white text-base font-light hover:font-bold">
              घटना दर्ता
            </p>
            <p className="text-white text-base font-light hover:font-bold">
              घटना दर्ता
            </p>
          </div>
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl text-white  tablet:text-xl tablet:font-medium ">
              सम्पर्क
            </h2>
            <div className="relative flex gap-2">
              <IoIosCall className="text-white " />
              <div>
                <p className="  text-white text-base  hover:font-bold font-light ">
                  फोन: +९७७ ८३ ५२०१२८
                </p>
                <p className="text-white text-base font-light  hover:font-bold">
                  फ्याक्स: +९७७ ८३ ५२०१२८
                </p>
              </div>
            </div>

            <div className="relative flex gap-2">
              <MdEmail className="text-white " />
              <div>
                <p className="text-white text-base font-light hover:font-bold">
                  info@birendranagarmun.gov.np
                </p>{" "}
                <p className="text-white text-base font-light hover:font-bold ">
                  info@birendranagarmun.gov.np
                </p>
              </div>
            </div>

            <div className="relative flex gap-2">
              <MdEditLocation className="text-white " />
              <p className="text-white text-base font-light hover:font-bold">
                ठेगाना : वीरेन्द्रनगर-८ , सुर्खेत
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="border-b-2 w-full  border-[#000000]  "></p>
      <p className=" bg-[#F7F7F7] flex justify-items-center  items-center ">
        &copy; {today.getFullYear()} वीरेन्द्रनगर नगरपालिका, नगर कार्यपालिकाको
        कार्यालय
      </p>
    </div>
  );
};

export default Footer;

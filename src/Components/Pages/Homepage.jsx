import React from "react";
import nepallogo from "../assets/Image/IRD_Nepal_1.png";
import bnnlogo from "../assets/Image/Logo BNM.jpg";
import nepalflag from "../assets/Image/flag.gif";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Login from "./Login";
import { SiGnu } from "react-icons/si";
import SignUp from "./Signup";
import Personalinfo from "../Form/Personalinfo";
import Dashboard from "../Dashboard";
import Footer from "../Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col  gap-5 px-5 laptop:px-0 my-10 mx-auto ">
      <section className="flex flex-col  ">
        <div className="grid grid-cols-3 px-10">
          <img className="hidden tablet:block tablet:max-w-28 tablet:h-auto tablet:mt-10" src={nepallogo} alt="Logo" />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-[#265CC0] text-xl font-semibold">
              वीरेन्द्रनगर नगरपालिका,
            </h1>
            <p className="text-[#b83955] text-3xl font-semibold">
              कृषि विभागको कार्यालय
            </p>
            <span className="text-[#b83955] text-3xl font-semibold">
              कर्णाली प्रदेश,
            </span>
          </div>

          <div className="flex flex-row justify-end items-end gap-3 ">
            <img className="hidden tablet:block tablet:max-w-24 tablet:h-auto" src={bnnlogo} alt="Logo" />
            {/* <img className="w-60 h-auto" src={nepalflag} alt="Logo" /> */}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <div className="bg-[#0d6efd] w-full flex  justify-between items-center  py-3 flex-row ">
          <div>
            <ul className="flex  justify-center items-center gap-10 px-20 ">
              <Link
                to={"/dashboard"}
                className="text-base font-normal text-[#fff]"
              >
                गृह पृष्ठ
              </Link>
              <li className="text-base font-normal text-[#fff]">
                हाम्रो बारेमा{" "}
              </li>
              <li className="text-base font-normal text-[#fff]">
                सूचना तथा समाचार{" "}
              </li>
            </ul>
          </div>
          <div className="flex gap-10 px-20">
          <Link to={"/Personalinfo"} className="text-base font-normal text-[#fff]">
              दर्ता गर्नुहोस्
            </Link>
            <Link to={"/login"} className="text-base font-normal text-[#fff]">
              लग-इन गर्नुहोस्
            </Link>
          </div>
        </div>
        <div className="flex  gap-5 mx-10">
          <div className=" flex flex-col w-3/5 gap-5 ">
            <button className="bg-[#FF0000] text-base font-semibold px-2 py-1 rounded  text-[#ffff]">
              पछिल्लो
            </button>
            <button className="bg-[#FF0000] text-base font-semibold px-10 py-3 rounded  text-[#ffff]">
            सूचनाहरू
            </button>
            <div className="flex flex-col  h-80 w-96  overflow-scroll bottom-0 border-2 rounded">
              <h1 className="flex flex-col justify-start text-base font-normal gap-2 py-5 px-2">
                Medical Korea e-Class सम्बन्धमा ।
                <p className="flex gap-2 text-sm ">
                  प्रकाशित मिति{" "}
                  <span className="text-[#265CC0]"> sun, 09 jun 2024</span>
                </p>
              </h1>
              <hr />

              <h1 className="py-5 px-2">Medical Korea e-Class सम्बन्धमा ।</h1>
              <hr />

              <h1 className="py-5 px-2">Medical Korea e-Class सम्बन्धमा ।</h1>
              <hr />

              <h1 className="py-5 px-2">Medical Korea e-Class सम्बन्धमा ।</h1>
              <hr />

              <h1 className="py-5 px-2">Medical Korea e-Class सम्बन्धमा ।</h1>
              <hr />

              <h1 className="py-5 px-2">Medical Korea e-Class सम्बन्धमा ।</h1>
              <hr />

              <h1 className="py-5 px-2">Medical Korea e-Class सम्बन्धमा ।</h1>
              <hr />
            </div>
          </div>
          <div className=" flex flex-col  gap-5 mx-10 mt-20">
            <h1 className="flex text-3xl font-semibold text-red-700">
              वीरेन्द्रनगर नगरपालिकाको वेभसाइटमा स्वागत छ ।
            </h1>

            <p>
              कर्णाली प्रदेशको राजधानीका रुपमा रहेको यस वीरेन्द्रनगर नगरपालिकाको
              स्थापना वि.सं. २०३३ सालमा सुर्खेत उपत्यका भित्र पर्ने कटकुवा,
              गोठीकाडा र जर्बुटा गाउ पञ्चायत भित्र पर्ने केही भागलाई मिलाएर
              वीरेन्द्रनगर नगरपञ्चायतका रुपमा भएकोमा नेपाल सरकारको मिति
              २०७१।०१।२५ गतेको निर्णय बमोजिम साविकका छिमेकी उत्तरगंगा र
              लाटिकोइली गाविस तथा मिति २०७१।०८।१६ गतेको निर्णय अनुसार जर्वुटा
              गा.वि.स गाभ्नुका साथै मिति २०७२।०३।१५ गतेको निर्णय बमोजिम एक वटा
              वडा थप गरि जम्मा वडा संख्या २५ कायम भएकोमा नेपाल सरकारको मिति
              २०७३÷११÷२७ को निर्णयअनुसार विस्तारित नगरमा साविकका गढी, रतु र
              गर्पन गा.वि.स. समावेश गर्दै २४५.८५ वर्ग कि.मी., १६ वडा भएको
              स्थानीय तहका रूपमा वीरेन्द्रनगर नगरपालिका रहेको छ । नेपालको
              राजधानी काठमाण्डौं देखि लगभग ६०० कि.मी. उत्तर पश्चिममा समुन्द्री
              सतहबाट लगभग ६६५ मी. मा अवस्थित यो नगरपालिकाको उत्तरमा महाभारत
              पर्वतको रानीमत्ता, रातानाब्ला र दक्षिणमा चुरे पहाडको हर्रे,
              देउरालीका मनोरम पहाडद्वारा घेरिएको कचौरा आकारमा दक्षिण तर्फ
              ढल्किएको सानो, न धेरै जाडो हुने न धेरै गर्मी हुने सुन्दर उपत्यका
              हो । यस नगरपालिका पूर्वमा पाम्का र साटाखानी गा.वि.स., पश्चिममा
              हरिहरपुर गा.वि.स., कुनाथरी गा.वि.स र लेखगाउ“ गा.वि.स., उत्तरमा
              दैलेख जिल्लाको गोगनपानी गा.वि.स., दक्षिणमा भेरी नदी रहेका छन् ।
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col">
       <h1 className="text-8xl text-red-600  py-20" >     Map Section</h1>
   <Link to={"Login"} className="py-2 px-10 bg-blue-600 rounded text-white ">Login</Link>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;

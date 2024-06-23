import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider";
import Map from "../../Map/WardMap";
const Homepage = () => {
  return (
    <div className="flex flex-col  gap-5 px-5 laptop:px-0 my-10 mx-10 ">
      <div className="flex w-[100%] items-start justify-start">
        <button
          className="bg-[#FF0000] text-[#ffff] text-base font-semibold py-3  "
          style={{ width: "200px" }}
        >
          पछिल्लो
        </button>
        <div style={{ width: "calc(100% - 150px)" }}>
          <Slider />
        </div>
      </div>
      <div className=" flex flex-col-reverse tablet:flex-row justify-between gap-10">
        <div className="flex flex-col justify-start items-start gap-2">
          <button className="bg-[#FF0000] text-[#ffff] py-3  px-10 text-base font-semibold   ">
            सूचनाहरू
          </button>
          <section className="flex flex-col  h-full tablet:w-96  overflow-scroll bottom-0 border-2 rounded">
            <Link to={""}>
              <h1 className="flex flex-col justify-start text-base font-normal gap-2 py-5 px-2">
                Medical Korea e-Class सम्बन्धमा ।
                <p className="flex gap-2 text-sm ">
                  प्रकाशित मिति
                  <span className="text-[#265CC0]"> sun, 09 jun 2024</span>
                </p>
                <hr />
              </h1>
            </Link>
            <Link to={""}>
              <h1 className="flex flex-col justify-start text-base font-normal gap-2 py-5 px-2">
                Medical Korea e-Class सम्बन्धमा ।
                <p className="flex gap-2 text-sm ">
                  प्रकाशित मिति
                  <span className="text-[#265CC0]"> sun, 09 jun 2024</span>
                </p>
                <hr />
              </h1>
            </Link>
            <Link to={""}>
              <h1 className="flex flex-col justify-start text-base font-normal gap-2 py-5 px-2">
                Medical Korea e-Class सम्बन्धमा ।
                <p className="flex gap-2 text-sm ">
                  प्रकाशित मिति
                  <span className="text-[#265CC0]"> sun, 09 jun 2024</span>
                </p>
                <hr />
              </h1>
            </Link>
            <Link to={""}>
              <h1 className="flex flex-col justify-start text-base font-normal gap-2 py-5 px-2">
                Medical Korea e-Class सम्बन्धमा ।
                <p className="flex gap-2 text-sm ">
                  प्रकाशित मिति
                  <span className="text-[#265CC0]"> sun, 09 jun 2024</span>
                </p>
                <hr />
              </h1>
            </Link>
          </section>
        </div>
        <div className="flex flex-col gap-10 pb-40">
          <section style={{ width: "100%", height: "800px" }}>
            <Map />
          </section>
          <section className=" flex flex-col  gap-5 justify-center items-center">
            <h1 className="flex text-5xl font-bold text-red-700">
              वीरेन्द्रनगर नगरपालिका कृषि विभागको वेभसाइटमा स्वागत छ ।
            </h1>

            <h1 className="flex flex-col text-base  gap-5 justify-center items-center">
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
            </h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

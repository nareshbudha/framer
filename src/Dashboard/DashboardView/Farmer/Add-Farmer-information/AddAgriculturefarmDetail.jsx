import React, { useState } from "react";
import Calendars from "../../../Components/Calendars";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


const AddAgricultureFarmDetail = () => {
  const [formData, setFormData] = useState({
    "कृषि व्यवसाय / फर्म": "",
    ठेगाना: "",
    "दर्ता नम्बर": "",
    "दर्ता मिति": "",
    "दर्ता भएको कार्यालय": "",
    "फर्मको किसिम": "",
    "वार्षिक रोजगारी सिर्जना": "",
    "कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो":"",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData({
      "कृषि व्यवसाय / फर्म": "",
      ठेगाना: "",
      "दर्ता नम्बर": "",
      "दर्ता मिति": "",
      "दर्ता भएको कार्यालय": "",
      "फर्मको किसिम": "",
      "वार्षिक रोजगारी सिर्जना": "",
      "कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो":"",
    });
  };

  return (
    <div className="flex flex-col justify-between gap-5 px-5 laptop:px-0 m-10 max-w-[1800px]">
      <div className="flex flex-col gap-2">
      <p className="text-[#3C763D] bg-[#DFF0D8] p-3 font-bold rounded text-xl tablet:text-2xl">
          कृषि व्यवसाय/फर्म/उद्यम दर्ता
        </p>
      </div>
      <form
        className="grid-1 border-green-200 border-2 p-3 rounded-lg "
        onSubmit={handleSubmit}
      >
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 p-3">
          {/* Form fields */}
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              कृषि व्यवसाय / फर्म / उद्यमको किसानको नाम:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="बुढा एग्रीकल्चर फार्म प्रा. लि"
              name="कृषि व्यवसाय / फर्म"
              value={formData["कृषि व्यवसाय / फर्म"]}
              onChange={handleChange}
            />
          </div>
          {/* <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              नागरिकता न.:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="number"
              name="नागरिकता न."
              value={formData["नागरिकता न."]}
              onChange={handleChange}
            />
          </div> */}
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              ठेगाना:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="कर्णाली प्रदेश सुर्खेत बीरेन्द्रनगर नगरपालिका ७"
              name="ठेगाना"
              value={formData["ठेगाना"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              दर्ता नम्बर:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="12345678"
              name="दर्ता नम्बर"
              value={formData["दर्ता नम्बर"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              दर्ता मिति:
            </p>
            <Calendars
              name="दर्ता मिति"
              value={formData["दर्ता मिति"]}
              onChange={handleDateChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              दर्ता भएको कार्यालय:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="आन्तिरक राजश्व कार्यालय"
              name="दर्ता भएको कार्यालय"
              value={formData["दर्ता भएको कार्यालय"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              व्यवसाय/फर्म/उद्यमको किसिम:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="व्यवसाय/फर्म/उद्यमको किसिम"
              name="फर्मको किसिम"
              value={formData["फर्मको किसिम"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              वार्षिक रोजगारी सिर्जना(संख्या ):
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="५ जना"
              name="वार्षिक रोजगारी सिर्जना"
              value={formData["वार्षिक रोजगारी सिर्जना"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">
              कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो"
              onChange={handleChange}
            />
          
          </div>
        </div>
      
        <div className="gap-2 flex">
          <Link to={"/admin/add-irrigation-detail"}>
            <button className="  flex gap-2 items-center px-4 py-2 text-white bg-red-500">
              <FaArrowLeft className="" />
              सिँचाइ विवरण
            </button>
          </Link>
          <Link to={"/admin/add/crop/production/and/market-management"}>
            <button
              className="  flex gap-2 items-center px-4 py-2 text-white bg-[#3C763D]"
              type="submit"
            >
              बाली उत्पादन/बजारीकरण विवरण
              <FaArrowRight className="" />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddAgricultureFarmDetail;
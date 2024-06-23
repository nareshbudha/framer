import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Calendars from "../../../../Dashboard/Components/Calendars";

const AddCropproductionDetail = () => {
  const [formData, setFormData] = useState({
    "बाली/उत्पादनको नाम": "",
    परिमाण: "",
    "प्रति एकाई दर": "",
    "बजारीकरणको तरिका": "",
    "उत्पादनको मिति":'',
  });
  const handleDateChange = (name, date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: date,
    }));
  };
  //     const nepaliNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  //     return number.toString().replace(/\d/g, (d) => nepaliNumerals[d]);
  //   }; Nepali Numer

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      "बाली/उत्पादनको नाम": "",
      परिमाण: "",
      "प्रति एकाई दर": "",
      क्षेत्रफल: "",
      "उत्पादनको मिति":'',
    });
  };

  return (
    <div className="flex flex-col justify-between gap-5 px-5 laptop:px-0 m-10 max-w-[1800px]">
      <div className="flex flex-col gap-2">
        <p className="text-[#3C763D] bg-[#DFF0D8] p-3 font-bold rounded text-xl tablet:text-2xl">
          बाली उत्पादन/बजारीकरण विवरण
        </p>
      </div>
      <form
        className="grid-1 grid-1 border-green-200 border-2 p-3 rounded-lg "
        onSubmit={handleSubmit}
      >
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 p-3">
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">बाली/उत्पादनको नाम</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="रायोको साग"
              name="बाली/उत्पादनको नाम"
              value={formData["बाली/उत्पादनको नाम"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold"> उत्पादनको क्षेत्रफल: </p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="क्षेत्रफल:"
              name="प्रति एकाई दर"
              value={formData["प्रति एकाई दर"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold"> उत्पादन परिमाण:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="२ के.जी."
              name="परिमाण"
              value={formData["परिमाण"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">प्रति एकाई दर(रुपैयाँ): </p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="१५"
              name="प्रति एकाई दर"
              value={formData["प्रति एकाई दर"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">बजारीकरणको तरिका: </p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="व्यापारी घरमै आएर"
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">कुल आम्दानी: </p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="२*१५=३० (रुपैयाँ)"
             
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
            उत्पादनको मिति:
            </p>
            <Calendars
              name="उत्पादनको मिति"
              value={formData["उत्पादनको मिति"]}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="gap-2 flex p-3">
          <Link to={"/admin/add-farmer/register"}>
            <button className="  flex gap-2 items-center px-4 py-2 text-white bg-red-500">
              <FaArrowLeft className="" />
              कृषि व्यवसाय/फर्म/उद्यम दर्ता


            </button>
          </Link>
          <Link to={"/admin/document/upload-section"}>
            <button
              className="  flex gap-2 items-center px-4 py-2 text-white bg-[#3C763D]"
              type="submit"
            >
              कागजात अपलोड
              <FaArrowRight className="" />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddCropproductionDetail;
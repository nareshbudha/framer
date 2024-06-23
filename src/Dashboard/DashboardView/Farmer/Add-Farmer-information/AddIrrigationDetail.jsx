import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const AddIrrigationDetail = () => {
  const [formData, setFormData] = useState({
    "सिँचाइ उपलब्धता": "",
    "सिँचित क्षेत्रफल": "",
    "सिँचाइको स्रोत": "",
  });

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
      "सिँचाइ उपलब्धता": "",
      "सिँचित क्षेत्रफल": "",
      "सिँचाइको स्रोत": "",
    });
  };

  return (
    <div className="flex flex-col justify-between gap-5 px-5 laptop:px-0 m-10 max-w-[1800px]">
      <div className="flex flex-col gap-2">
        <p className="text-[#3C763D] bg-[#DFF0D8] p-3 font-bold rounded text-xl tablet:text-2xl">
          सिँचाइ विवरण
        </p>
      </div>
      <form
        className="grid-1 grid-1 border-green-200 border-2 p-3 rounded-lg "
        onSubmit={handleSubmit}
      >
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 ">
          <div className="relative gap-2 flex flex-col ">
            <p className="font-bold">सिँचाइ उपलब्धता:</p>
            <select
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              name="सिँचाइ उपलब्धता"
              value={formData["सिँचाइ उपलब्धता"]}
              onSelect={handleChange}
            >
              <option value="">एउटा छनौट गर्नुहोस्</option>
              <option value="छ">छ</option>
              <option value="छैन"> छैन</option>
            </select>
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">सिँचित क्षेत्रफल</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="बिघा कठ्ठा धुर"
              name="सिँचित क्षेत्रफल"
              value={formData["सिँचित क्षेत्रफल"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">सिँचाइको स्रोत: </p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="सिँचाइ कुलो,आकाशे पानी सङ्कलन"
              name="सिँचाइको स्रोत"
              value={formData["सिँचाइको स्रोत"]}
              onChange={handleChange}
            />
          </div>
        </div>
      
        <div className="gap-2 flex mt-5">
          <Link to={"/admin/add-family-detail"}>
            <button className="  flex gap-2 items-center px-4 py-2 text-white bg-red-500">
              <FaArrowLeft className="" />
              पारिवारिक विवरण
            </button>
          </Link>
          <Link to={"/admin/add-farmer/register"}>
            <button
              className="  flex gap-2 items-center px-4 py-2 text-white bg-[#3C763D]"
              type="submit"
            >
            कृषि व्यवसाय/फर्म/उद्यम दर्ता


              <FaArrowRight className="" />
            </button>
          </Link>
        </div>
      </form>

    </div>
  );
};

export default AddIrrigationDetail;
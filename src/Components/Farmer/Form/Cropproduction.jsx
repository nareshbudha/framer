import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cropproduction = () => {
  const [formData, setFormData] = useState({
   "बाली/उत्पादनको नाम" : "",
    परिमाण: "",
    "प्रति एकाई दर": "",
    "बजारीकरणको तरिका": "",
  });
  //   const toNepaliNumerals = (number) => {
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
    });
  };

  return (
    <div className="flex flex-col justify-between gap-5 px-5 laptop:px-0 my-10 mx-auto max-w-[1800px]">
      <div className="flex flex-col gap-2">
        <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
          बाली उत्पादन/बजारीकरण विवरण
        </p>
      </div>
      <form
        className="grid-1 grid-1 border-green-200 border-2 p-3 rounded-lg "
        onSubmit={handleSubmit}
      >
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
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
            <p className="font-bold"> परिमाण:</p>
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
              name="बजारीकरणको तरिका"
              value={formData["बजारीकरणको तरिका"]}
              onChange={handleChange}
            />
          </div>
        </div>
        <Link to={"/document/upload-section" }>
          
          <button
            className="px-2 py-1 text-white bg-green-400 rounded-lg my-2"
            type="submit"
          >
            Next
          </button>
        </Link>
      </form>

      {/*  the table with form data */}
       {/* <div className="mt-10">
        <table className="border-collapse border border-gray-500">
          <thead>
            <tr>
              <th>संख्या</th>
              {Object.keys(formData).map((key, index) => (
                <th key={index} className="border border-gray-500 p-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                
                <td className="border border-gray-500 p-2">{index + 1}</td>
                {Object.values(data).map((value, index) => (
                  <td key={index} className="border border-gray-500 p-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>  */}
    </div>
  );
};

export default Cropproduction;

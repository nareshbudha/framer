import React, { useState } from "react";
import Calendars from "./Calendars";
import { Link } from "react-router-dom";
import FarmerAddress from "./Farmeraddress";

const Agriculturefarmregistertion = () => {
  const [formData, setFormData] = useState({
    "कृषि व्यवसाय / फर्म": "",
    ठेगाना: "",
    "दर्ता नम्बर": "",
    "दर्ता मिति": "",
    "दर्ता भएको कार्यालय": "",
    "फर्मको किसिम": "",
    "वार्षिक रोजगारी सिर्जना": "",
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
    });
  };

  //     const doc = new jsPDF();
  //     let yOffset = 10;

  //     // Format form data
  //     const formattedFormData = Object.entries(formData).map(
  //       ([fieldName, value]) => {
  //         return `${fieldName}: ${value}`;
  //       }
  //     );

  //     // Format table data
  //     const formattedTableData = tableData.map((data, index) => {
  //       return `Entry ${index + 1}:\n${Object.entries(data)
  //         .map(([key, value]) => `${key}: ${value}`)
  //         .join("\n")}`;
  //     });

  //     // Add form data to PDF
  //     doc.text("Form Data:", 10, yOffset);
  //     formattedFormData.forEach((data) => {
  //       yOffset += 10;
  //       doc.text(data, 10, yOffset);
  //     });

  //     // Add table data to PDF
  //     yOffset += 10;
  //     doc.text("Table Data:", 10, yOffset);
  //     formattedTableData.forEach((data) => {
  //       yOffset += 10;
  //       doc.text(data, 10, yOffset);
  //     });

  //     // Save PDF
  //     doc.save("form_data.pdf");
  //   };

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
        </div>
        <div className="gap-2 flex p-3">
          <Link to={"/admin/crop/production/and/market-management"}>
            <button
              className="px-4 py-2 text-white bg-green-400"
              type="submit"
            >
              Next
            </button>
          </Link>
        </div>
      </form>

      {/* Table to display form data */}
      {/* <div className="mt-10">
        <div className="flex justify-center items-center my-3">
          <p>कार्यालय :- स्थानिय तह बीरेन्द्रनगर नगरपालिका वार्ड :- ४</p>
        </div>

        <table className="border-collapse border border-gray-500">
          <thead>
            <tr>
              <th>संख्या</th>
              {Object.keys(formData).map((fieldName, index) => (
                <th key={index} className="border border-gray-500 px-4 py-2">
                  {fieldName}
                </th>
              ))}
          
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-500 px-4 py-2">
                  {index + 1}
                </td>
                {Object.values(data).map((value, idx) => (
                  <td key={idx} className="border border-gray-500 px-4 py-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Agriculturefarmregistertion;

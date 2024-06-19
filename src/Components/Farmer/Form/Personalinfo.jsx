import React, { useState } from "react";
import jsPDF from "jspdf";
import Calendars from "../Form/Calendars";
import { Link } from "react-router-dom";
import FarmerAddress from "./Farmeraddress";
("");

const Personalinfo = () => {
  const [formData, setFormData] = useState({
    "परिचय पत्र नं": "",
    "नागरिकता न.": "",
    नाम: "",
    लिङ्ग: "",
    "मोबाइल न": "",
    "जन्म मिति": "",
    "शैक्षिक योग्यता": "",
    "नागरिकता जारी जिल्ला": "",
    "कृषि कार्यको क्षेत्र": "",
    "तपाईं वार्षिक औसत कति महिना कृषि कार्यमा संलग्न हुनुहुन्छ?": "",
  });
  const toNepaliNumerals = (number) => {
    const nepaliNumerals = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return number.toString().replace(/\d/g, (d) => nepaliNumerals[d]);
  };

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
      "परिचय पत्र नं": "",
      "नागरिकता न.": "",
      नाम: "",
      लिङ्ग: "",
      "मोबाइल न": "",
      "जन्म मिति": "",
      "शैक्षिक योग्यता": "",
      "नागरिकता जारी जिल्ला": "",
      "कृषि कार्यको क्षेत्र": "",
      "तपाईं वार्षिक औसत कति महिना कृषि कार्यमा संलग्न हुनुहुन्छ?": "",
    });
  };

  //   const generatePDF = () => {
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
          <p className="text-[#3C763D] bg-[#DFF0D8] p-2 font-bold rounded text-xl tablet:text-2xl tabletmd:text-3xl">
            व्यक्तिगत विवरण
          </p>
        </div>
      <form className="grid-1 border-green-200 border-2 p-3 rounded-lg " onSubmit={handleSubmit}>
       
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 p-3">
          {/* Form fields */}
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              परिचय पत्र नं:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="number"
              name="परिचय पत्र नं"
              value={formData["परिचय पत्र नं"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
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
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              नाम:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              name="नाम"
              value={formData["नाम"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              लिङ्ग:
            </p>
            <select
              className="border-[#D0D7E2] border-[1px] flex flex-col rounded-xl px-1 py-1 text-sm tablet:text-base tabletmd:px-2 tabletmd:py-3"
              name="लिङ्ग"
              value={formData["लिङ्ग"]}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="पुरुष">पुरुष</option>
              <option value="महिला">महिला</option>
              <option value="अन्य">अन्य</option>
            </select>
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              मोबाइल नं:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              name="मोबाइल न"
              value={formData["मोबाइल न"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              जन्म मिति:
            </p>
            <Calendars
              name="जन्म मिति"
              value={formData["जन्म मिति"]}
              onChange={handleDateChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              शैक्षिक योग्यता:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              name="शैक्षिक योग्यता"
              value={formData["शैक्षिक योग्यता"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              नागरिकता जारी जिल्ला:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              name="नागरिकता जारी जिल्ला"
              value={formData["नागरिकता जारी जिल्ला"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              कृषि कार्यको क्षेत्र:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              name="कृषि कार्यको क्षेत्र"
              value={formData["कृषि कार्यको क्षेत्र"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              तपाईं वार्षिक औसत कति महिना कृषि कार्यमा संलग्न हुनुहुन्छ? :
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              name="तपाईं वार्षिक औसत कति महिना कृषि कार्यमा संलग्न हुनुहुन्छ?"
              value={
                formData[
                  "तपाईं वार्षिक औसत कति महिना कृषि कार्यमा संलग्न हुनुहुन्छ?"
                ]
              }
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="gap-2 flex ">
        <Link to={"/admin/farmer-address"}>
            <button
              className="mt-5 px-4 py-2 text-white bg-green-400"
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
              <th className="border border-gray-500 px-4 py-2">Status</th>
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
                <td className="border border-gray-500 px-4 py-2">
                  <button className="px-2 py-1 text-white bg-blue-400 mr-2">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-white bg-red-400">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* Button to generate PDF */}
      {/* <button
        className="mt-5 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
        onClick={generatePDF}
      >
        Download PDF
      </button> */}

      {/* <div className="flex justify-end bg- items-end ">
        <button className="px-2 py-1 text-white bg-green-400 rounded-lg my-2">
          <a href="FarmerAddress">Next </a>
        </button>
      </div> */}
    </div>
  );
};

export default Personalinfo;

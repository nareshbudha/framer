import React, { useState } from "react";
import jsPDF from "jspdf";
import Calendars from "./Form/Calendars";
import { Link } from "react-router-dom";
import Papa from "papaparse"
const Farmerinfo = () => {
  const [formData, setFormData] = useState({
    "परिचय पत्र नं": "",
    "नागरिकता न": "",
    // "नागरिकता जारी जिल्ला": "",
    नाम: "",
    लिङ्ग: "",
    "मोबाइल न": "",
    "जन्म मिति": "",
    // प्रदेश: "",
    // जिल्ला: "",
    नगरपालिका: "",
    वार्ड: "",
    टोल: "",
    "कृषि कार्यको क्षेत्र": "",
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
      "परिचय पत्र नं": "",
      "नागरिकता न": "",
      // "नागरिकता जारी जिल्ला": "",
      नाम: "",
      लिङ्ग: "",
      "मोबाइल न": "",
      "जन्म मिति": "",
      // प्रदेश: "",
      // जिल्ला: "",
      नगरपालिका: "",
      वार्ड: "",
      टोल: "",
      "कृषि कार्यको क्षेत्र": "",
    });
  };


  const generatePDF = () => {
    const doc = new jsPDF();
    let yOffset = 10;

    // Add form data to PDF
    doc.text("Form Data:", 10, yOffset);
    yOffset += 10;
    Object.entries(formData).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 10, yOffset);
      yOffset += 10;
    });

    // Add some space before table data
    yOffset += 10;

    // Add table headers to PDF
    const tableHeaders = [
      "संख्या", "परिचय पत्र नं", "नागरिकता न", "नागरिकता जारी जिल्ला", "नाम",
      "लिङ्ग", "मोबाइल नं", "जन्म मिति", "प्रदेश", "जिल्ला",
      "नगरपालिका", "वार्ड", "टोल", "कृषि कार्यको क्षेत्र"
    ];

    // Print table headers
    doc.text(tableHeaders.join(", "), 10, yOffset);
    yOffset += 10;

    // Print table data
    tableData.forEach((data, index) => {
      const row = [
        index + 1,
        data["परिचय पत्र नं"], data["नागरिकता न"], data["नागरिकता जारी जिल्ला"], data["नाम"],
        data["लिङ्ग"], data["मोबाइल नं"], data["जन्म मिति"], data["प्रदेश"], data["जिल्ला"],
        data["नगरपालिका"], data["वार्ड"], data["टोल"], data["कृषि कार्यको क्षेत्र"]
      ].join(", ");

      doc.text(row, 10, yOffset);
      yOffset += 10;
    });

    // Save PDF
    doc.save("form_data.pdf");
  };

  return (
    <div className="flex flex-col justify-between gap-5  laptop:px-0  m-10 max-w-[1800px]">
       <div className="flex justify-between">
        <p className="text-[#3C763D] font-bold rounded  text-xl tablet:text-2xl tabletmd:text-3xl">
          किसान जानकारी
        </p>
          <Link to={"/admin/personal-info"} className="py-2">
          <button className="p-3 mx-3 text-white rounded bg-[#3C763D]">Add Farmer</button>
        </Link>
      </div>
      <form className="grid-1 border-green-200 border-2 p-3 rounded-lg" onSubmit={handleSubmit}>
       
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4">
          {/* Form fields */}
          <div className="relative gap-2 flex flex-col p-2">
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
              name="नागरिकता न"
              value={formData["नागरिकता न"]}
              onChange={handleChange}
            />
          </div>
          {/* <div className="relative gap-2 flex flex-col">
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
          </div> */}
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
          {/* <div className="relative gap-2 flex flex-col ">
            <p className="font-bold">प्रदेश:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="प्रदेशको नाम "
              name="प्रदेश"
              value={formData["प्रदेश"]}
              onChange={handleChange}
            />
          </div> */}
          {/* <div className="relative gap-2 flex flex-col ">
            <p className="font-bold">जिल्ला:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="जिल्लाको नाम"
              name="जिल्ला"
              value={formData["जिल्ला"]}
              onChange={handleChange}
            />
          </div> */}
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">नगरपालिका:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="नगरपालिकाको नाम"
              name="नगरपालिका"
              value={formData["नगरपालिका"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">वार्ड:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="वार्ड न"
              name="वार्ड"
              value={formData["वार्ड"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">टोल:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base"
              type="text"
              placeholder="टोलको नाम"
              name="टोल"
              value={formData["टोल"]}
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
        </div>
        <button
          className="p-3 text-white bg-[#3C763D] rounded-lg my-2"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Table to display form data */}
      <div className=" ">
        <div className="flex justify-end items-center">
          {/* Button to generate PDF */}
          <button
            className="mt-5 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded flex justify-end"
            onClick={generatePDF}
          >
            Export Pdf
          </button>
        </div>
        <div className="flex justify-center items-center my-2">
          <p>कार्यालय :- स्थानिय तह बीरेन्द्रनगर नगरपालिका वार्ड :- ४</p>
        </div>

        <table className="border w-full  border-gray-500">
          <thead>
            <tr className="divide-x divide-black">
              <th className="text-sm">क्र.सं</th>
              <th  className="text-sm "> परिचय पत्र नं</th>
              <th className="text-sm " >नागरिकता न</th>
              {/* <th className="text-sm w-28"> नागरिकता जारी जिल्ला: </th> */}
              <th  className="text-sm ">नाम</th>
              <th  className="text-sm ">लिङ्ग </th>
              <th  className="text-sm "> मोबाइल नं</th>
              <th  className="text-sm ">जन्म मिति</th>
              {/* <th  className="text-sm w-28">प्रदेश</th>
              <th  className="text-sm w-28">जिल्ला</th> */}
              <th  className="text-sm ">नगरपालिका</th>
              <th  className="text-sm "> वार्ड</th>
              <th  className="text-sm ">टोल</th>
              <th  className="text-sm "> कृषि कार्यको क्षेत्र</th>

              <th className=" text-sm border border-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">
                  {index + 1}
                </td>
                {Object.values(data).map((value, idx) => (
                  <td key={idx} className="border border-black px-4 py-2">
                    {value}
                  </td>
                ))}
                <td className=" flex gap-2">
                  <button className="px-2 py-1 text-white bg-blue-400 ">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-white bg-red-400">
                    Delete
                  </button>
                  <button className="px-2 py-1 text-white bg-purple-500">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Farmerinfo;

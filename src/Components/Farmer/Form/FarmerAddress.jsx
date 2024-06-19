import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const Farmeraddress = () => {
  const [formData, setFormData] = useState({
    "स्थायी ठेगाना प्रदेश": "",
    "स्थायी ठेगाना जिल्ला": "",
    "स्थायी ठेगाना नगरपालिका": "",
    "स्थायी ठेगाना वार्ड": "",
    "स्थायी ठेगाना टोल": "",
    "अस्थायी ठेगाना प्रदेश": "",
    "अस्थायी ठेगाना जिल्ला": "",
    "अस्थायी ठेगाना नगरपालिका": "",
    "अस्थायी ठेगाना वार्ड": "",
    "अस्थायी ठेगाना टोल": "",
    "जन्म मिति": "",
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
      "स्थायी ठेगाना प्रदेश": "",
      "स्थायी ठेगाना जिल्ला": "",
      "स्थायी ठेगाना नगरपालिका": "",
      "स्थायी ठेगाना वार्ड": "",
      "स्थायी ठेगाना टोल": "",
      "अस्थायी ठेगाना प्रदेश": "",
      "अस्थायी ठेगाना जिल्ला": "",
      "अस्थायी ठेगाना नगरपालिका": "",
      "अस्थायी ठेगाना वार्ड": "",
      "अस्थायी ठेगाना टोल": "",
      "जन्म मिति": "",
    });
  };

  const handleCopyAddress = () => {
    const {
      "स्थायी ठेगाना प्रदेश": permanentState,
      "स्थायी ठेगाना जिल्ला": permanentDistrict,
      "स्थायी ठेगाना नगरपालिका": permanentMunicipality,
      "स्थायी ठेगाना वार्ड": permanentWard,
      "स्थायी ठेगाना टोल": permanentToll,
    } = formData;

    setFormData((prevFormData) => ({
      ...prevFormData,
      "स्थायी ठेगाना प्रदेश": "",
      "स्थायी ठेगाना जिल्ला": "",
      "स्थायी ठेगाना नगरपालिका": "",
      "स्थायी ठेगाना वार्ड": "",
      "स्थायी ठेगाना टोल": "",
      "अस्थायी ठेगाना प्रदेश": permanentState,
      "अस्थायी ठेगाना जिल्ला": permanentDistrict,
      "अस्थायी ठेगाना नगरपालिका": permanentMunicipality,
      "अस्थायी ठेगाना वार्ड": permanentWard,
      "अस्थायी ठेगाना टोल": permanentToll,
    }));
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
  //     // Add table data to PDF
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
      {/* किसानको ठेगाना */}
      <div className="flex flex-col gap-2">
        <p className=" text-[#3C763D] bg-[#DFF0D8] font-semibold text-sm tablet:text-base tablet:font-bold rounded p-2 tabletmd:text-3xl">
          किसानको ठेगाना
        </p>
      </div>

      <form
        className="grid-1 border-green-200 border-2 p-3 rounded-lg "
        onSubmit={handleSubmit}
      >
        <section className="p-3">
          <p className="text-2xl font-bold"> स्थायी ठेगाना</p>
          <div className="text-[#000000] grid tablet:grid-cols-4  gap-4 mt-3 tabletmd:mt-5">
            <div className="relative gap-2 flex flex-col ">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">
                {" "}
                प्रदेश:{" "}
              </p>
              <input
                className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
                type="text"
                placeholder="प्रदेशको नाम "
                name="स्थायी ठेगाना प्रदेश"
                value={formData["स्थायी ठेगाना प्रदेश"]}
                onChange={handleChange}
              />
            </div>
            <div className="relative gap-2 flex flex-col ">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">
                जिल्ला:
              </p>
              <input
                className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
                type="text"
                placeholder="जिल्लाको नाम"
                name="स्थायी ठेगाना जिल्ला"
                value={formData["स्थायी ठेगाना जिल्ला"]}
                onChange={handleChange}
              />
            </div>

            <div className="relative gap-2 flex flex-col">
              <p className="  font-semibold text-sm tablet:text-base tablet:font-bold">
                नगरपालिका:
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
                type="text"
                placeholder="नगरपालिकाको नाम"
                name="स्थायी ठेगाना नगरपालिका"
                value={formData["स्थायी ठेगाना नगरपालिका"]}
                onChange={handleChange}
              />
            </div>

            <div className="relative gap-2 flex flex-col">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold ">
                वार्ड:
              </p>

              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
                type="text"
                placeholder="वार्ड न"
                name="स्थायी ठेगाना वार्ड"
                value={formData["स्थायी ठेगाना वार्ड"]}
                onChange={handleChange}
              />
            </div>

            <div className="relative gap-2 flex flex-col">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold ">
                टोल:
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
                type="text"
                placeholder="टोलको नाम"
                name="स्थायी ठेगाना टोल"
                value={formData["स्थायी ठेगाना टोल"]}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5 p-3">
          <div className="flex items-text-xl font-normal text-red-400 mt-3 gap-1">
            Same as above
            <input
              className="mt-1"
              type="checkbox"
              onClick={handleCopyAddress}
            />
          </div>
          <p className="text-2xl font-bold">अस्थायी ठेगाना</p>

          <div className="text-[#000000] grid tablet:grid-cols-4  gap-4">
            <div className="relative gap-2 flex flex-col ">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">
                {" "}
                प्रदेश:{" "}
              </p>
              <input
                className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
                type="text"
                placeholder="प्रदेशको नाम "
                name="अस्थायी ठेगाना प्रदेश"
                value={formData["अस्थायी ठेगाना प्रदेश"]}
                onChange={handleChange}
              />
            </div>
            <div className="relative gap-2 flex flex-col ">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold">
                जिल्ला:
              </p>
              <input
                className=" border-[#D0D7E2]  border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3  "
                type="text"
                placeholder="जिल्लाको नाम"
                name="अस्थायी ठेगाना जिल्ला"
                value={formData["अस्थायी ठेगाना जिल्ला"]}
                onChange={handleChange}
              />
            </div>

            <div className="relative gap-2 flex flex-col">
              <p className="  font-semibold text-sm tablet:text-base tablet:font-bold">
                नगरपालिका:
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
                type="text"
                placeholder="नगरपालिकाको नाम"
                name="अस्थायी ठेगाना नगरपालिका"
                value={formData["अस्थायी ठेगाना नगरपालिका"]}
                onChange={handleChange}
              />
            </div>

            <div className="relative gap-2 flex flex-col">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold ">
                वार्ड:
              </p>

              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
                type="text"
                placeholder="वार्ड न"
                name="अस्थायी ठेगाना वार्ड"
                value={formData["अस्थायी ठेगाना वार्ड"]}
                onChange={handleChange}
              />
            </div>

            <div className="relative gap-2 flex flex-col">
              <p className=" font-semibold text-sm tablet:text-base tablet:font-bold ">
                टोल:
              </p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3 text-sm tablet:text-base "
                type="text"
                placeholder="टोलको नाम"
                name="अस्थायी ठेगाना टोल"
                value={formData["अस्थायी ठेगाना टोल"]}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>
        <div className="gap-2 flex ">
          <Link to={"/admin/family-detail"}>
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
        <table className="border-collapse border border-gray-500">
          <thead>
            <tr>
              <th>संख्या</th>
              {Object.keys(formData).map((fieldName, index) => (
                <th key={index} className="border border-gray-500 px-4 py-2">
                  {fieldName}
                </th>
              ))}
              <th className="border border-gray-500 px-4 py-2">विकल्प</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-500 px-4 py-2">
                  {toNepaliNumerals(index + 1)}
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
        className="mt-5 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded"
        onClick={generatePDF}
      >
        Generate PDF
      </button> */}
    </div>
  );
};

export default Farmeraddress;

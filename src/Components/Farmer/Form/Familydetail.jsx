import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Familydetail= () => {
  const [formData, setFormData] = useState({
    नाम: '',
    उमेर: '',
    लिङ्ग: '',
    नाता: '',
    "नागरिकता नम्बर": '',
    "फोन नम्बर": '',
    " कृषि कार्यको क्षेत्र" :'',
    " कृषि पेशामा संलग्न हुनु भएको कति वर्ष भयो": '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      नाम: '',
      उमेर: '',
      लिङ्ग: '',
      नाता: '',
      "नागरिकता नम्बर": '',
    "फोन नम्बर": '',
   "कृषि कार्यको क्षेत्र": '',
     "कृषि पेशामा संलग्न हुनु भएको कति वर्ष भयो": '',
    });
  };

  return (
    <div className='flex flex-col justify-between gap-5 px-5 laptop:px-0 my-10 mx-auto max-w-[1800px]'>
      <div className="flex flex-col gap-2">
          <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
            पारिवारिक विवरण
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
      <form className="grid-1 grid-1 border-green-200 border-2 p-3 rounded-lg " onSubmit={handleSubmit}>
        
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold"> नाम:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="किसानको नाम"
              name="नाम"
              value={formData['नाम']}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">उमेर:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="१० वर्ष"
              name="उमेर"
              value={formData['उमेर']}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col ">
            <p className="font-bold">लिङ्ग:</p>
            <select
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              name="लिङ्ग"
              value={formData['लिङ्ग']}
              onChange={handleChange}
            >
              <option value="">एउटा छनौट गर्नुहोस्</option>
              <option value="पुरुष">पुरुष</option>
              <option value="महिला">महिला</option>
              <option value="अन्य">अन्य</option>
            </select>
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold"> नाता:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="सदस्य संख्या"
              name="नाता"
              value={formData['नाता']}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">नागरिकता नम्बर: </p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="नागरिकता  नम्बर"
              name="नागरिकता नम्बर"
              value={formData['नागरिकता नम्बर']}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">फोन नम्बर:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="फोन नम्बर"
              name="फोन नम्बर"
              value={formData['फोन नम्बर']}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold"> कृषि कार्यको क्षेत्र:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="  कृषि कार्यको क्षेत्र"
              name="कृषि कार्यको क्षेत्र"
              value={formData['कृषि कार्यको क्षेत्र']}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-5 flex-col tablet:flex-row">
          <p>कृषि पेशामा संलग्न हुनु भएको कति वर्ष भयो?</p>
          <input
            className="border-[#D0D7E2] border-2 flex rounded"
            type="text"
            placeholder=""
            name="कृषि पेशामा संलग्न हुनु भएको कति वर्ष भयो"
            value={formData['कृषि पेशामा संलग्न हुनु भएको कति वर्ष भयो']}
            onChange={handleChange}
          />
        </div>
        <Link to={"/add/land-detail" }>   <button
          className="px-2 py-1 text-white bg-green-400 rounded-lg my-2"
          type="submit"
        >
         Next
        </button></Link>
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
      </div> */}
    </div>
  );
};

export default Familydetail;
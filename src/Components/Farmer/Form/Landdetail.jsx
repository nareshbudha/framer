import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Landdetail= () => {
  const [formData, setFormData] = useState({
    "जग्गाको किसिम":'',
    स्वामित्व: '',
    "जमिनको किसिम": '',
    क्षेत्रफल: '',
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
        "जग्गाको किसिम":'',
        स्वामित्व:'',
        "जमिनको किसिम":'',
        क्षेत्रफल:'',
    });
  };

  return (
    <div className='flex flex-col justify-between gap-5 px-5 laptop:px-0 m-10 max-w-[1800px]'>
      <div className="flex flex-col gap-2">
          <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
          जग्गाको विवरण 
          </p>
          <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
        </div>
      <form className="grid-1 grid-1 border-green-200 border-2 p-3 rounded-lg " onSubmit={handleSubmit}>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 mt-3 tabletmd:mt-5">
        <div className="relative gap-2 flex flex-col ">
        <p className="text-[#3C763D] bg-[#DFF0D8] p-3 font-bold rounded text-xl tablet:text-2xl">
            जग्गाको किसिम:</p>
            <select
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              name="जग्गाको किसिम"
              value={formData['जग्गाको किसिम']}
              onChange={handleChange}
            >
              <option value="">एउटा छनौट गर्नुहोस्</option>
              <option value="आफ्नो">आफ्नो</option>
              <option value="आफ्नो">आफ्नो</option>
            </select>
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">स्वामित्व ( जग्गा धनी )</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="आफ्नो/परिवारको"
              name="स्वामित्व"
              value={formData['स्वामित्व']}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold"> जमिनको किसिम:</p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="खेत/पाखो/बारी"
              name="जमिनको किसिम"
              value={formData["जमिनको किसिम"]}
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">क्षेत्रफल: </p>
            <input
              className="border-[#D0D7E2] border-2 flex rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="text"
              placeholder="बिघा-कठ्ठा-धुर"
              name="क्षेत्रफल"
              value={formData['क्षेत्रफल']}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="gap-2 flex p-3">
          <Link to={"/admin/irrigation-detail"}>
            <button
              className="px-4 py-2 text-white bg-green-400"
              type="submit"
            >
              Next
            </button>
          </Link>
        </div>
        
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

export default Landdetail;
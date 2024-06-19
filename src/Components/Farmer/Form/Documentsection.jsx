import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DocumentUpload = () => {
  const [formData, setFormData] = useState({
    passportPhoto: null,
    citizenshipPhoto: null,
    redCertificatePhoto: null,
    businessVatPhoto: null,
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      passportPhoto: null,
      citizenshipPhoto: null,
      redCertificatePhoto: null,
      businessVatPhoto: null,
    });
  };

  return (
    <div className='flex flex-col justify-between gap-5 px-5 laptop:px-0 m-10 max-w-[1800px]'>
      <div className="flex flex-col gap-2">
        <p className="text-[#3C763D] bg-[#DFF0D8] font-bold rounded p-2 text-xl tablet:text-2xl tabletmd:text-3xl">
          कागजात अपलोड
        </p>
        <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
      </div>
      <form className="grid-1 grid-1 border-green-200 border-2 p-3 rounded-lg" onSubmit={handleSubmit}>
        <div className="text-[#000000] grid tablet:grid-cols-4 gap-4 p-3">
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">पासपोर्ट साइजको फोटो:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="passportPhoto"
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">नागरीकताको फोटो:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="citizenshipPhoto"
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">लाल पुर्जाको फोटो:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="redCertificatePhoto"
              onChange={handleChange}
            />
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="businessVatPhoto"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="gap-2 flex p-3">
          <Link to={"/"}>
            <button
              className="px-4 py-2 text-white bg-green-400"
              type="submit"
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
      
      {/*  the table with form data */}
      {/* <div className="mt-10">
        <table className="border-collapse border border-gray-500 w-full">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">संख्या</th>
              <th className="border border-gray-500 p-2">पासपोर्ट साइजको फोटो</th>
              <th className="border border-gray-500 p-2">नागरीकताको फोटो</th>
              <th className="border border-gray-500 p-2">लाल पुर्जाको फोटो</th>
              <th className="border border-gray-500 p-2">कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-500 p-2">{index + 1}</td>
                <td className="border border-gray-500 p-2">
                  {data.passportPhoto ? data.passportPhoto.name : 'N/A'}
                </td>
                <td className="border border-gray-500 p-2">
                  {data.citizenshipPhoto ? data.citizenshipPhoto.name : 'N/A'}
                </td>
                <td className="border border-gray-500 p-2">
                  {data.redCertificatePhoto ? data.redCertificatePhoto.name : 'N/A'}
                </td>
                <td className="border border-gray-500 p-2">
                  {data.businessVatPhoto ? data.businessVatPhoto.name : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default DocumentUpload;

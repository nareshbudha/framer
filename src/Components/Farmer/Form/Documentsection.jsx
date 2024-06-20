import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const DocumentUpload = () => {
  const [formData, setFormData] = useState({
    passportPhoto: null,
    citizenshipPhoto: null,
    redCertificatePhoto: null,
    businessVatPhoto: null,
  });

  const [previews, setPreviews] = useState({
    passportPhoto: null,
    citizenshipPhoto: null,
    redCertificatePhoto: null,
    businessVatPhoto: null,
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: file,
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prevPreviews) => ({
          ...prevPreviews,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
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
    setPreviews({
      passportPhoto: null,
      citizenshipPhoto: null,
      redCertificatePhoto: null,
      businessVatPhoto: null,
    });
  };

  return (
    <div className="flex flex-col justify-between gap-5 px-5 laptop:px-0 m-10 max-w-[1800px]">
      <div className="flex flex-col gap-2">
        <p className="text-[#3C763D] bg-[#DFF0D8] p-3 font-bold rounded text-xl tablet:text-2xl">
          कागजात अपलोड
        </p>
        <span className="text-[#000000] font-light mobile:text-base tablet:text-xl"></span>
      </div>
      <form
        className="grid-1 grid-1 border-green-200 border-2 p-3 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="text-[#000000] grid tablet:grid-cols-3 gap-4 p-3">
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">पासपोर्ट साइजको फोटो:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="passportPhoto"
              onChange={handleChange}
            />
            {previews.passportPhoto && (
              <img
                src={previews.passportPhoto}
                alt="Passport Preview"
                className="mt-2 h-20 w-20 object-cover"
              />
            )}
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">नागरीकताको फोटो:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="citizenshipPhoto"
              onChange={handleChange}
            />
            {previews.citizenshipPhoto && (
              <img
                src={previews.citizenshipPhoto}
                alt="Citizenship Preview"
                className="mt-2 h-20 w-20 object-cover"
              />
            )}
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">लाल पुर्जाको फोटो:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="redCertificatePhoto"
              onChange={handleChange}
            />
            {previews.redCertificatePhoto && (
              <img
                src={previews.redCertificatePhoto}
                alt="Red Certificate Preview"
                className=" h-20 w-20 object-cover"
              />
            )}
          </div>
          <div className="relative gap-2 flex flex-col">
            <p className="font-bold">
              कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-1 py-1 tablet:px-2 tablet:py-3"
              type="file"
              name="businessVatPhoto"
              onChange={handleChange}
            />
            {previews.businessVatPhoto && (
              <img
                src={previews.businessVatPhoto}
                alt="Business VAT Preview"
                className="mt-2 h-20 w-20 object-cover"
              />
            )}
          </div>
        </div>

        <div className="gap-2 flex p-3">
          <Link to={"/admin/crop/production/and/market-management"}>
            <button className="flex gap-2 items-center px-4 py-2 text-white bg-red-500">
              <FaArrowLeft />
              बाली उत्पादन/बजारीकरण विवरण
            </button>
          </Link>

          <button
            className="flex gap-2 items-center px-4 py-2 text-white bg-[#3C763D]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentUpload;


//       {/*  the table with form data */}
//       {/* <div className="mt-10">
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 p-2">संख्या</th>
//               <th className="border border-gray-500 p-2">पासपोर्ट साइजको फोटो</th>
//               <th className="border border-gray-500 p-2">नागरीकताको फोटो</th>
//               <th className="border border-gray-500 p-2">लाल पुर्जाको फोटो</th>
//               <th className="border border-gray-500 p-2">कृषि व्यवसाय / फर्म / उद्यम प्यान/भ्याटको फोटो</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((data, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-500 p-2">{index + 1}</td>
//                 <td className="border border-gray-500 p-2">
//                   {data.passportPhoto ? data.passportPhoto.name : 'N/A'}
//                 </td>
//                 <td className="border border-gray-500 p-2">
//                   {data.citizenshipPhoto ? data.citizenshipPhoto.name : 'N/A'}
//                 </td>
//                 <td className="border border-gray-500 p-2">
//                   {data.redCertificatePhoto ? data.redCertificatePhoto.name : 'N/A'}
//                 </td>
//                 <td className="border border-gray-500 p-2">
//                   {data.businessVatPhoto ? data.businessVatPhoto.name : 'N/A'}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   );
// };
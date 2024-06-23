import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const Farmerinfo = () => {
  const [tableData] = useState([
    {
      "परिचय पत्र नं": "1234",
      "नागरिकता नं": "56700",
      नाम: "राम",
      लिङ्ग: "पुरुष",
      "मोबाइल नं": "9801234567",
      "जन्म मिति": "1990-01-01",
      नगरपालिका: "बीरेन्द्रनगर",
      वार्ड: "४",
      टोल: "टोल १",
      "कृषि कार्यको क्षेत्र": "धान",
    },
    {
      "परिचय पत्र नं": "2345",
      "नागरिकता नं": "6789",
      नाम: "सीता",
      लिङ्ग: "महिला",
      "मोबाइल नं": "9807654321",
      "जन्म मिति": "1995-05-05",
      नगरपालिका: "बीरेन्द्रनगर",
      वार्ड: "५",
      टोल: "टोल २",
      "कृषि कार्यको क्षेत्र": "गहुँ",
    },
    {
      "परिचय पत्र नं": "3456",
      "नागरिकता नं": "7890",
      नाम: "गोपाल",
      लिङ्ग: "पुरुष",
      "मोबाइल नं": "9812345678",
      "जन्म मिति": "1988-12-25",
      नगरपालिका: "काठमाडौं",
      वार्ड: "१०",
      टोल: "टोल ३",
      "कृषि कार्यको क्षेत्र": "मकै",
    },
    {
      "परिचय पत्र नं": "4567",
      "नागरिकता नं": "8901",
      नाम: "प्रिया",
      लिङ्ग: "महिला",
      "मोबाइल नं": "9856789012",
      "जन्म मिति": "1992-08-15",
      नगरपालिका: "पोखरा",
      वार्ड: "७",
      टोल: "टोल ४",
      "कृषि कार्यको क्षेत्र": "अनाज",
    },
    {
      "परिचय पत्र नं": "5678",
      "नागरिकता नं": "9012",
      नाम: "महेश",
      लिङ्ग: "पुरुष",
      "मोबाइल नं": "9845678901",
      "जन्म मिति": "1987-04-30",
      नगरपालिका: "भरतपुर",
      वार्ड: "२",
      टोल: "टोल ५",
      "कृषि कार्यको क्षेत्र": "तरकारी",
    },
    {
      "परिचय पत्र नं": "6789",
      "नागरिकता नं": "0123",
      नाम: "लक्ष्मी",
      लिङ्ग: "महिला",
      "मोबाइल नं": "9812345678",
      "जन्म मिति": "1993-11-20",
      नगरपालिका: "बुटवल",
      वार्ड: "३",
      टोल: "टोल ६",
      "कृषि कार्यको क्षेत्र": "फलफूल",
    },
    {
      "परिचय पत्र नं": "7890",
      "नागरिकता नं": "1234",
      नाम: "राधा",
      लिङ्ग: "महिला",
      "मोबाइल नं": "9809876543",
      "जन्म मिति": "1996-07-10",
      नगरपालिका: "ललितपुर",
      वार्ड: "१५",
      टोल: "टोल ७",
      "कृषि कार्यको क्षेत्र": "वनस्पति",
    },
    {
      "परिचय पत्र नं": "8901",
      "नागरिकता नं": "2345",
      नाम: "श्याम",
      लिङ्ग: "पुरुष",
      "मोबाइल नं": "9867543210",
      "जन्म मिति": "1985-03-18",
      नगरपालिका: "धरान",
      वार्ड: "११",
      टोल: "टोल ८",
      "कृषि कार्यको क्षेत्र": "बागवानी",
    },
    {
      "परिचय पत्र नं": "9012",
      "नागरिकता नं": "3456",
      नाम: "अजय",
      लिङ्ग: "पुरुष",
      "मोबाइल नं": "9876543210",
      "जन्म मिति": "1991-09-22",
      नगरपालिका: "इलाम",
      वार्ड: "७",
      टोल: "टोल ९",
      "कृषि कार्यको क्षेत्र": "धान",
    },
    {
      "परिचय पत्र नं": "0123",
      "नागरिकता नं": "4567",
      नाम: "कृष्ण",
      लिङ्ग: "पुरुष",
      "मोबाइल नं": "9810987654",
      "जन्म मिति": "1989-12-03",
      नगरपालिका: "चितवन",
      वार्ड: "२",
      टोल: "टोल १०",
      "कृषि कार्यको क्षेत्र": "गहुँ",
    },

    // Add more data entries as needed
  ]);
  const doc = new jsPDF()
  const exportpdfHandler =() =>{
    doc.autoTable({html:"#product-table"})
    // console.log(tableData)
    doc.save('product-pdf')
  }
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const searchData = Object.fromEntries(formData.entries());

    const filtered = tableData.filter((item) => {
      return Object.keys(searchData).every((key) => {
        if (!searchData[key]) return true; // Skip filter if field is empty
        return String(item[key])
          .toLowerCase()
          .includes(searchData[key].toLowerCase());
      });
    });

    setFilteredData(filtered);
  };

  // Function to handle view button click
  const handleView = (item) => {
    // Replace with your logic for handling view action, e.g., navigating to a details page
    console.log("Viewing:", item);
  };

  return (
    <div className="flex flex-col justify-between gap-5 px-4 md:px-10">
      <div className="flex justify-between items-center">
        <p className="text-[#3C763D] bg-[#DFF0D8] p-3 font-bold rounded text-xl md:text-2xl">
          किसान जानकारी
        </p>
        <Link to={"/admin/add-personal-info"} className="py-2">
          <button className="p-3 mx-3 text-white rounded bg-[#3C763D]">
            Add Farmer
          </button>
        </Link>
      </div>
      <form
        className="grid border-green-200 border-2 p-3 rounded-lg"
        onSubmit={handleSearch}
      >
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 p-2">
            <p className="font-semibold text-sm md:text-base">परिचय पत्र नं:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="परिचय पत्र नं"
              name="परिचय पत्र नं"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">नागरिकता नं:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="नागरिकता नं"
              name="नागरिकता न"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">नाम:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="नाम"
              name="नाम"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">लिङ्ग:</p>
            <select
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              name="लिङ्ग"
            >
              <option value="">Select an option</option>
              <option value="पुरुष">पुरुष</option>
              <option value="महिला">महिला</option>
              <option value="अन्य">अन्य</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">मोबाइल नं:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="मोबाइल नं"
              name="मोबाइल नं"
            />
          </div>{" "}
          <div className="relative gap-2 flex flex-col">
            <p className="font-semibold text-sm tablet:text-base tablet:font-bold">
              जन्म मिति:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="जन्म मिति"
              name="जन्म मिति"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">नगरपालिका:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="नगरपालिका"
              name="नगरपालिका"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">वार्ड:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="वार्ड"
              name="वार्ड"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">टोल:</p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm"
              type="text"
              placeholder="टोल"
              name="टोल"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm md:text-base">
              कृषि कार्यको क्षेत्र:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="कृषि कार्यको क्षेत्र"
              name="कृषि कार्यको क्षेत्र"
            />
          </div>
        </div>
        <div className="flex  mt-4">
          <button
            type="submit"
            className="p-3 mx-3 text-white rounded bg-[#3C763D]"
          >
            Search
          </button>
        </div>
        
     
      </form>

      <div className="overflow-x-auto mt-6">
      <button  className="p-3 bg-green-500 text-white"  onClick={exportpdfHandler}>export pdf</button>
        <table className="min-w-full bg-white border border-gray-300" id="product-table">
          <thead>
            <tr className="bg-[#8ba98c] text-white text-center">
              <th className="p-2">क्र.सं</th>
              <th className="p-2">परिचय पत्र नं</th>
              <th className="p-2">नागरिकता नं</th>
              <th className="p-2">नाम</th>
              <th className="p-2">लिङ्ग</th>
              <th className="p-2">मोबाइल नं</th>
              <th className="p-2">जन्म मिति</th>
              <th className="p-2">नगरपालिका</th>
              <th className="p-2">वार्ड</th>
              <th className="p-2">टोल</th>
              <th className="p-2">कृषि कार्यको क्षेत्र</th>
              <th className="p-2">स्थिति</th> {/* New column for Status */}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={`${item["परिचय पत्र नं"]}-${index}`}
                className="text-center"
              >
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">
                  {item["परिचय पत्र नं"]}
                </td>
                <td className="border border-gray-300 p-2">
                  {item["नागरिकता नं"]}
                </td>
                <td className="border border-gray-300 p-2">{item.नाम}</td>
                <td className="border border-gray-300 p-2">{item.लिङ्ग}</td>
                <td className="border border-gray-300 p-2">
                  {item["मोबाइल नं"]}
                </td>
                <td className="border border-gray-300 p-2">
                  {item["जन्म मिति"]}
                </td>
                <td className="border border-gray-300 p-2">{item.नगरपालिका}</td>
                <td className="border border-gray-300 p-2">{item.वार्ड}</td>
                <td className="border border-gray-300 p-2">{item.टोल}</td>
                <td className="border border-gray-300 p-2">
                  {item["कृषि कार्यको क्षेत्र"]}
                </td>
                <td className="border border-gray-300 p-2">
                  {/* Buttons for Edit, Delete, and View */}
                  <div className="flex justify-center gap-2">
                    <button
                      className="bg-[#8ba98c] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleView(item)}
                    >
                      View
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </div>
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

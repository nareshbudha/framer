import React, { useState } from "react";

const CropsSelection = () => {
  const [crops, setCrops] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCrop = {
      id: crops.length + 1,
      name: formData.get("बाली को प्रकार"),
    };
    setCrops([...crops, newCrop]);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 p-2">
            <p className="font-semibold text-sm md:text-base">
              बाली को प्रकार:
            </p>
            <input
              className="border-[#D0D7E2] border-2 rounded-lg px-2 py-1 md:py-2 text-sm md:text-base"
              type="text"
              placeholder="बाली को प्रकार"
              name="बाली को प्रकार"
            />
            <div className="flex  mt-4">
              <button
                type="submit"
                className="p-3 mx-3 text-white rounded bg-[#3C763D]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="flex items-center gap-80">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">क्रम संख्या</th>
              <th className="border border-gray-300 px-4 py-2">बाली को प्रकार</th>
              <th className="border border-gray-300 px-4 py-2">स्थिति</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop) => (
              <tr key={crop.id}>
                <td className="border border-gray-300 px-4 py-2">{crop.id}</td>
                <td className="border border-gray-300 px-4 py-2">{crop.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-500 mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default CropsSelection;

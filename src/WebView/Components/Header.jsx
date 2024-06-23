import React from "react";
import nepallogo from "../../assets/Image/IRD_Nepal_1.png";
import bnnlogo from "../../assets/Image/Logo BNM.jpg";

const Header = () => {
  return (
    <div className="py-5">
      <section className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-10">
          <img
            className="hidden sm:block sm:max-w-28 sm:h-auto sm:mt-10"
            src={nepallogo}
            alt="Nepal Logo"
          />
          <div className="flex flex-col justify-center items-center gap-2 text-center sm:text-left">
            <h1 className="text-[#265CC0] text-xl sm:text-2xl font-semibold">
              वीरेन्द्रनगर नगरपालिका,
            </h1>
            <p className="text-[#b83955] text-2xl sm:text-3xl font-semibold">
              कृषि विभागको कार्यालय
            </p>
            <span className="text-[#b83955] text-2xl sm:text-3xl font-semibold">
              कर्णाली प्रदेश,
            </span>
          </div>
          <div className="flex flex-row  justify-center  sm:justify-end items-center sm:items-end gap-3 mt-4 sm:mt-0">
            <img
              className="hidden sm:block sm:max-w-24 sm:h-auto"
              src={bnnlogo}
              alt="BNN Logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

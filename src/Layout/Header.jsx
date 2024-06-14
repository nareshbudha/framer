import React from "react";
import nepallogo from "../Components/assets/Image/IRD_Nepal_1.png";
import bnnlogo from "../Components/assets/Image/Logo BNM.jpg";

const Header = () => {
  return (
    <div className=" py-5">
      <section className="flex flex-col  ">
        <div className="grid grid-cols-3 px-10">
          <img
            className="hidden tablet:block tablet:max-w-28 tablet:h-auto tablet:mt-10"
            src={nepallogo}
            alt="Logo"
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-[#265CC0] text-xl font-semibold">
              वीरेन्द्रनगर नगरपालिका,
            </h1>
            <p className="text-[#b83955] text-3xl font-semibold">
              कृषि विभागको कार्यालय
            </p>
            <span className="text-[#b83955] text-3xl font-semibold">
              कर्णाली प्रदेश,
            </span>
          </div>

          <div className="flex flex-row justify-end items-end gap-3 ">
            <img
              className="hidden tablet:block tablet:max-w-24 tablet:h-auto"
              src={bnnlogo}
              alt="Logo"
            />
            {/* <img className="w-60 h-auto" src={nepalflag} alt="Logo" /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

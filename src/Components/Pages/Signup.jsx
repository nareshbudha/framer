import React from "react";
import sgup from "../assets/Image/sig.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-10 tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto tabletmd:py-24">
        <div className="flex-1">
          <img className="hidden tabletmd:block rounded-lg " src={sgup} alt="" />
        </div>

        <form className="flex-1 gap-1 mt-5">
          <div className="flex flex-col gap-1">
            <p className="text-[#3C763D] font-bold text-xl tablet:text-2xl tabletmd:text-3xl">
            दर्ता गर्नुहोस्
            </p>
            <span className="text-[#000000] font-light mobile:text-base tablet:text-xl">
            अब आफ्नो  विवरण दर्ता  गर्नुहोस्।
            </span>
          </div>
          <div className="text-[#000000] flex flex-col gap-4 mt-3 tabletmd:mt-5">
            <div className="relative gap-1 flex flex-col ">
              <p className="text-[#3C763D] font-bold">इमेल</p>
              <input
                className=" border-[#D0D7E2]  border-2 rounded-lg px-3 py-2  "
                type="email"
                placeholder="इ-मेल ठेगाना"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#3C763D]  font-bold ">लगइन आईडी</p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="text"
                placeholder="लगइन आईडी भर्नहोस्"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#3C763D]  font-bold">नाम</p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="text"
                placeholder=" आफ्नो नाम भर्नहोस्"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#3C763D] font-bold">पासवर्ड</p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2"
                type="password"
                placeholder=" आफ्नो पासवर्ड भर्नहोस्"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#3C763D] font-bold ">पासवर्ड सुनिश्चित गर्नुहोस</p>
              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="password"
                placeholder="पासवर्ड पुन भर्नहोस्"
                required
              />
            </div>
            <div className="relative gap-1 flex flex-col">
              <p className="text-[#3C763D] font-bold ">फोन नम्बर</p>

              <input
                className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 "
                type="text"
                placeholder="आफ्नो फोन नम्बर भर्नहोस्"
                required
              />
            </div>
            <button className="bg-[#3C763D]  text-[#FFFFFF] mobile:rounded-lg px-2 py-2 mt-2">
            दर्ता गर्नुहोस्
            </button>
          </div>
          <p className=" text-center mt-2 ">
             <span>पहिले नै खाता छ?             </span>
            <Link to="/login" className="text-[#3C763D] font-bold ">
            Login
            </Link>
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

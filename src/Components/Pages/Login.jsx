import React from "react";
import lgi from "../assets/Image/sig.png";
import { Link } from "react-router-dom";
import SignUp from "./Signup";
const Login = () => {
  return (
    <div className="flex flex-col gap-10 tabletmd:flex-row tabletmd:w-[90%] laptop:w-[80%] desktop:w-[65%] w-[90%] mx-auto tabletmd:py-24">
      <div className="flex-1">
        <img
          className="hidden tabletmd:block rounded-lg
        "
          src={lgi}
          alt=""
        />
      </div>

      <div className=" flex-1 mt-4 ">
        <div className="flex flex-col gap-3 ">
          <h3 className="text-[#3C763D] flex flex-col font-bold  text-xl tablet:text-2xl tabletmd:text-4xl ">स्वागत छ </h3>
          <span className="text-[#000000] font-light text-base ">
          साइन इन गर्नुहोस्
          </span>
          
        </div>

        <form className="text-[#000000] gap-4 flex flex-col mt-4">
          <div className="relative gap-1 flex flex-col">
            <p className="text-[#3C763D] font-bold text-base ">
            प्रयोगकर्ता नाम
            </p>
            <input
              className=" border-[#D0D7E2] border-2  rounded-lg px-3 py-2"
              type="text"
              placeholder="प्रयोगकर्ता नाम वा इमेल ठेगाना"
              required
            />
          </div>
          <div className="relative gap-1 flex flex-col ">
            <div className="flex flex-row justify-between whitespace-nowrap">
              <p className="text-[#3C763D] font-bold ">पासवर्ड</p>
              <Link to={"/SignUp"} className="text-[#000000]">
                पासवर्ड बिर्सनुभयो?
              </Link>
            </div>

            <input
              className=" border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2"
              type="password"
              placeholder="पासवर्ड प्रविष्ट गर्नुहोस् "
              required
            />
          </div>

          <button className="bg-[#3C763D]  text-[#FFFFFF] mobile:rounded-lg px-2 py-2">
          लग - इन
          </button>
        </form>
        {/* <p className=" text-center mt-2 text-base font-light">
        खाता दर्ता भयको छैन?
          <Link
            to={"/SignUp"}
            className="text-[#3C763D]  font-bold tablet:text-base"
          >
            Signup now
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Login;

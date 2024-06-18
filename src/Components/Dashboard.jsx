import React from "react";
import Sidebar from "./Sidebar";
import Bar from "../Components/Bar";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div>
          <div className="basis-[12%]  ">
            <Sidebar />
          </div>

          <div className="basis-[88%]  border">
            <Bar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

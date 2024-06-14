import React from "react";
import Sidebar from "./Sidebar";
import Bar from "../Components/Bar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col-reverse tablet:flex-row ">
        <div className="basis-[12%]  border">
          <Sidebar />
        </div>
        <div className="basis-[88%]  ">
          <Bar/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

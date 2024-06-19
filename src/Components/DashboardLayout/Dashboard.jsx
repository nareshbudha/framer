import React from "react";
import Sidebar from "../DashboardLayout/Sidebar";
import Bar from "../common/Bar";
import Navbar from "../DashboardLayout/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col">
       
        <section className="flex flex-col tablet:flex-row">
            <Bar />

        </section>
      </div>
    </>
  );
};

export default Dashboard;
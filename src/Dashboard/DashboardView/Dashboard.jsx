import React from "react";
import Bar from "../Components/Bar";

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
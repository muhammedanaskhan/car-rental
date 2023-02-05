import React from 'react'
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";

const Dashboard =() => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
         <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
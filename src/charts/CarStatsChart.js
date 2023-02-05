import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

import carStaticsData from "../assets/dummy-data/carStatics";

const CarStatsChart = () => {
  return (
    <ResponsiveContainer>
      <AreaChart
       data={carStaticsData}
       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
      
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CarStatsChart;

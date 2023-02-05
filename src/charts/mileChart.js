import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
// import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recahrts";
import mileStaticsData from "../assets/dummy-data/mileStatics"

function mileChart() {
    return (
        <ResponsiveContainer width='100%'>
            <BarChart data={mileStaticsData}>
                <XAxis datakey="mileStats" stroke="#2884ff" />
                <Bar
                    dataKey="mileStats"
                    stroke="#2884ff"
                    fill="#2884ff"
                    barSize={30} />
                <Tooltip
                    wrapperClassName="tooltip__style"
                    cursor={false} />
            </BarChart>
        </ResponsiveContainer>
    );
}
export default mileChart
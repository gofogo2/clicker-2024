import React from "react";
import { Bar, BarChart, XAxis } from "recharts";

const CountChart = (props:any) => {
  return (
    <BarChart width={250} height={90} data={props.items} className="-mb-4">
      <XAxis stroke="black" strokeWidth={0.2} tickLine={false} fontSize={0} />
      <Bar dataKey="sum" fill="#3E91FF" barSize={25} />
    </BarChart>
  );
};

export default CountChart;

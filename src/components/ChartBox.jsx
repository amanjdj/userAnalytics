/* eslint-disable react/prop-types */
// import Chart from "chart.js/auto";
// import { useUser } from "../contexts/userContext";

// import { useCalls } from "../contexts/callsContext";
// import { useState } from "react";
// import { useAccounts } from "../contexts/accountsContext";
import {
  PieChart,
  Pie,
  // Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

import { useFinal } from "../contexts/finalContext";

function ChartBox() {
  const { callTypes, setSelectedTypeCalls } = useFinal();

  const data = [
    {
      name: "face to face",
      value: callTypes.face.length,
      data: callTypes.face,
      color: "#3196e7",
    },
    {
      name: "Phone",
      value: callTypes.phone.length,
      data: callTypes.phone,
      color: "#8dc5f2",
    },
    {
      name: "Email",
      value: callTypes.email.length,
      data: callTypes.email,
      color: "#badcf7",
    },
    {
      name: "InPerson",
      value: callTypes.inPerson.length,
      data: callTypes.inPerson,
      color: "#187dce",
    },
    {
      name: "Others",
      value: callTypes.other.length,
      data: callTypes.other,
      color: "#5fadec",
    },
  ];

  return (
    <div className=" bg-blue-100 flex-1 border-b-gray-400 rounded-lg shadow-md ">
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            outerRadius={180}
            cx="50%"
            cy="50%"
            paddingAngle={1}
            label
          >
            {data.map((entry, index) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.name}
                onClick={() => setSelectedTypeCalls(data[index])}
              />
            ))}
          </Pie>
          <Label />
          {/* <Tooltip /> */}
          <Legend verticalAlign="top" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartBox;

// const renderCustomizedLabel = ({ percent }) => {
//   console.log(percent);
//   return <text>{`${(percent * 100).toFixed(0)}% `}</text>;
// };
// import React, { PureComponent } from "react";

// const COLORS = ["#3196e7", "#8dc5f2", "#badcf7", "#187dce", "#5fadec"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}% `}
//     </text>
//   );
// };

{
  /* <div className="grow bg-blue-100 flex-1 border-b-gray-400 rounded-lg shadow-md">
  Hii
</div>; */
}

{
  /* <ResponsiveContainer
        width="100%"
        height="100%"
        className="grow bg-blue-100 flex-1 border-b-gray-400 rounded-lg shadow-md"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                onClick={() => setSelectedTypeCalls(data[index])}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */
}

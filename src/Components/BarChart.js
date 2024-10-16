import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import styles from './BarChart.module.css'



export default function BarChartContainer({data}) {
  return (
    <div  className={styles.container}>
    <div style={{ width: "100%", height: 300}}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          barSize={20}
          margin={{ top: 10, right: 20, left: 50, bottom: 5 }} // Adjust left margin to 100

        >
          {/* Automatically scale the XAxis */}
          <XAxis type="number" axisLine={false} tickLine={false} tick={false} />
          {/* Y-axis with labels */}
          <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} tick={{ fill: 'black', fontSize: 14 }} />
          {/* Bars with corner radius and brighter color */}
          <Bar dataKey="uv" fill="#8784D2" radius={[0, 20, 20, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}

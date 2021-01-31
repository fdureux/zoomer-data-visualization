import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";

const RevenuesByMonth = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/revenues/months").then((response) => {
      setData(
        response.data.map((element) => ({
          time: new Date(element.time).toLocaleString("en-GB", {
            month: "short",
          }),
          revenues: element.revenues,
        }))
      );
    });
  });
  return (
    <div className="graph-container">
      <h2> Revenues per month in 2018 </h2>
      <ResponsiveBar
        data={data}
        keys={["revenues"]}
        labelFormat=" ^-.2e"
        indexBy="time"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        defs={[
          {
            id: "custom",
            type: "patternLines",
            color: "#3c8bf7",
            spacing: 1,
            lineWidth: 1,
            stagger: true,
          },
        ]}
        fill={[
          {
            match: "*",
            id: "custom",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year 2018",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: "revenues",
          legendPosition: "middle",
          legendOffset: -55,
          format: " ^-.1e",
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default RevenuesByMonth;

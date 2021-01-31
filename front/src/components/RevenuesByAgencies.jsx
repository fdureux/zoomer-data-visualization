import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResponsivePie } from "@nivo/pie";

const RevenuesByAgencies = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/revenues/agencies")
      .then((response) => {
        setData(
          response.data.map((element) => ({
            id: element.agency_name,
            label: element.agency_name,
            value: element.revenues,
          }))
        );
      });
  });
  return (
    <div className="graph-container">
      <h2> Revenues per agency in 2018 </h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.4}
        padAngle={0.7}
        cornerRadius={3}
        sortByValue={true}
        colors={{ scheme: "blues" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        valueFormat=" ^-.2e"
        legends={[
          {
            anchor: "left",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 10,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default RevenuesByAgencies;

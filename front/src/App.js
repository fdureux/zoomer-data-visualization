import React, { useState } from "react";
import RevenuesByAgencies from "./components/RevenuesByAgencies";
import RevenuesByMonth from "./components/RevenuesByMonth";
import "./App.css";

function App() {
  const [agencyData, setAgencyData] = useState(false);
  const [monthData, setMonthData] = useState(false);

  const handleChange = (e) => {
    const selectedData = e.target.value;
    if (selectedData === "month") {
      setAgencyData(false);
      setMonthData(true);
    } else if (selectedData === "agency") {
      setAgencyData(true);
      setMonthData(false);
    } else {
      setAgencyData(false);
      setMonthData(false);
    }
  };

  return (
    <div className="App">
      <h1> Welcome to Zoomer</h1>
      <form>
        Which data do you want to see ?
        <select onChange={(e) => handleChange(e)}>
          <option value="none"> </option>
          <option value="month">Revenues by month</option>
          <option value="agency"> Revenues by agency</option>
        </select>
      </form>
      <div className={monthData ? "display-graph" : "display-off"}>
        {" "}
        <RevenuesByMonth />
      </div>
      <div className={agencyData ? "display-graph" : "display-off"}>
        {" "}
        <RevenuesByAgencies />
      </div>
    </div>
  );
}

export default App;

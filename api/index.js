const express = require("express");
const cors = require("cors");

const port = 8080;
const app = express();

const agenciesData = require("./datasets/revenues_2018_per_agency.json");
const monthsData = require("./datasets/revenues_2018_per_month.json");

app.use(cors());
app.use(express.json());

app.get("/api/revenues/agencies", (req, res) => {
  res.json(agenciesData);
});
app.get("/api/revenues/months", (req, res) => {
  res.json(monthsData);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

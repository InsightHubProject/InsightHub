import React, { useState } from "react";

import Layout from "../components/Layout";

import data1_sample from "../data/data1_sample.json";
import data2_sample from "../data/data2_sample.json";

import { SentimentStackedBarChart } from "../components/Charts/SentimentStackedBarChart";
import { SentimentLineChart } from "../components/Charts/SentimentLineChart";
import { SentimentPieCharts } from "../components/Charts/SentimentPieChart";

const Analysis = () => {
  // Assume data_sample is the array you want to use directly
  const [data1] = useState(data1_sample);
  const [data2] = useState(data2_sample);
  const [visualization, setVisualization] = useState("");
  // Initialize selectedDataset with null indicating no selection
  const [selectedDataset, setSelectedDataset] = useState(null);

  const handleDatasetChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "1") {
      setSelectedDataset(data1);
    } else if (selectedValue === "2") {
      setSelectedDataset(data2);
    } else {
      setSelectedDataset(null);
    }
  };

  const handleVisualizationChange = (event) => {
    setVisualization(event.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-col p-3 bg-base-300">
        <h1 className="text-4xl p-7 font-semibold flex justify-center">
          Analysis Page
        </h1>
        <div className="flex justify-start items-center pt-14 gap-3">
          <h3 className="text-2xl p-7 font-semibold">Enter Keyword:</h3>
          <input
            className="input input-warning input-bordered w-1/8"
            type="text"
            placeholder="Keyword"
          />
          {/* Dropdown to select the dataset */}
          <select
            className="select select-warning"
            onChange={handleDatasetChange}
            value={selectedDataset ? selectedDataset.id : ""}
          >
            <option value="" disabled selected>
              Choose Dataset
            </option>
            <option value="1">Twitter</option>
            <option disabled value="2">Facebook (Soon)</option>
          </select>
          <button className="btn btn-warning w-1/8 text-xl">
            Generate Report
          </button>
        </div>

        {/* Dropdown to select the type of visualization - potentially remove or adjust this part if not necessary for the current use case */}
        <div className="p-7">
          <select
            className="select select-warning"
            onChange={handleVisualizationChange}
            value={visualization}
          >
            <option disabled value="">Choose Data Visualization To Display</option>
            <option value="Stacked Bar Chart">Stacked Bar Chart</option>
            <option value="Line Chart">Line Chart</option>
            <option value="Pie Chart">Pie Chart</option>
            {/* Additional visualization options */}
          </select>
        </div>

        {/* Visualization components */}
        {visualization === "Stacked Bar Chart" && (
          <div className="flex justify-center p-7">
            <div className="card glass shadow-xl w-3/4">
              <div className="card-body">
                <SentimentStackedBarChart />
              </div>
            </div>
          </div>
        )}
        {visualization === "Line Chart" && (
          <div className="flex justify-center p-7">
            <div className="card glass shadow-xl w-3/4">
              <div className="card-body">
                <SentimentLineChart />
              </div>
            </div>
          </div>
        )}
        {visualization === "Pie Chart" && (
          <div className="flex justify-center p-7">
            <div className="card glass shadow-xl">
              <div className="card-body">
                <SentimentPieCharts />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center p-2">
          <button className="btn btn-warning w-1/4 text-xl">Save Report</button>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;

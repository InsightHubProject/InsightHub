import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import Layout from "../components/Layout";

import data1_sample from "../data/data1_sample.json";
import data2_sample from "../data/data2_sample.json";

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
            <option value="1">Dataset 1</option>
            <option value="2">Dataset 2</option>
          </select>
          <button className="btn btn-warning w-1/8 text-xl">
            Generate Report
          </button>
        </div>

        {/* Display selected dataset content */}
        {selectedDataset !== null &&
          selectedDataset.slice(0, 3).map((item, index) => (
            <div key={index} className="p-7">
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Sentiment:</strong> {item.sentiment}
              </p>
              <p>
                <strong>Content:</strong> {item.content}
              </p>
            </div>
          ))}

        {/* Dropdown to select the type of visualization - potentially remove or adjust this part if not necessary for the current use case */}
        <div className="p-7">
          <select
            className="select select-warning"
            onChange={handleVisualizationChange}
            value={visualization}
          >
            <option value="">Choose Data Visualization To Display</option>
            <option value="Bar Chart">Bar Chart</option>
            <option>Pie Chart</option>
            <option>Bubble Chart</option>
            {/* Additional visualization options */}
          </select>
        </div>

        {/* Visualization component - Adjust or remove based on your need */}
        {visualization === "Bar Chart" && (
          <BarChart width={600} height={300} data={selectedDataset}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        )}

        <div className="flex justify-center p-2">
          <button className="btn btn-warning w-1/4 text-xl">Save Report</button>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;

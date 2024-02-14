import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Layout from "../components/Layout";

const Analysis = () => {
  const [data, setData] = useState([]);
  const [visualization, setVisualization] = useState("");
  const [selectedDataset, setSelectedDataset] = useState(""); // Adjusted for clarity

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data1.json`) // Ensure data1.json is in the public folder
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const handleDatasetChange = (event) => {
    const datasetIndex = event.target.value;
    setSelectedDataset(datasetIndex);
    // Assuming jsonData is an array of datasets. Adjust as needed.
    // This might require further adjustment based on the actual structure of your jsonData.
  };

  const handleVisualizationChange = (event) => {
    setVisualization(event.target.value);
  };

  const generateReport = () => {
    // Implementation depends on how you want to generate the report.
    console.log("Report generated for dataset:", selectedDataset);
  };

  return (
    <Layout>
      <div className="flex flex-col p-3 bg-base-300">
        {/* Dropdown to select the dataset */}
        <div className="p-7">
          <select className="select select-warning" onChange={handleDatasetChange} value={selectedDataset}>
            <option value="" disabled>
              Choose Dataset
            </option>
            {/* Dynamically generate options based on data */}
            {data.map((dataset, index) => (
              <option key={index} value={index}>
                Dataset {index + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown to select the type of visualization */}
        <div className="p-7">
          <select className="select select-warning" onChange={handleVisualizationChange} value={visualization}>
            <option value="" disabled>
              Choose Data Visualization To Display
            </option>
            <option value="Bar Chart">Bar Chart</option>
            <option value="Pie Chart">Pie Chart</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Conditional rendering based on selected visualization */}
        {visualization === "Bar Chart" && (
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        )}

        {/* Save Report Button */}
        <div className="flex justify-center p-2">
          <button className="btn btn-warning w-1/4 text-xl" onClick={generateReport}>
            Save Report
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
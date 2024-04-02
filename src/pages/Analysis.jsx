import React, { useState } from "react";

import Layout from "../components/Layout/Layout";

import { SentimentStackedBarChart } from "../components/Charts/SentimentStackedBarChart";
import { SentimentLineChart } from "../components/Charts/SentimentLineChart";
import { SentimentPieCharts } from "../components/Charts/SentimentPieChart";

const Analysis = () => {
  const [visualization, setVisualization] = useState("");
  const [showAnalysisCard, setShowAnalysisCard] = useState(true); // New state to control analysis card visibility
  const [showVisualization, setShowVisualization] = useState(false); // New state to control visualization visibility
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status

  const handleGenerateReport = () => {
    setIsLoading(true); // Start loading

    // Simulate report generation time (e.g., fetching data)
    setTimeout(() => {
      setShowVisualization(true);
      setShowAnalysisCard(false);
      setIsLoading(false); // Stop loading after the "report generation" is done
    }, 2000); // Simulate a 2-second loading process
  };
  const handleVisualizationChange = (event) => {
    setVisualization(event.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-col p-3 bg-base-300">
        <h1 className="text-4xl p-7 font-semibold flex justify-center mt-12">
          Analysis Page
        </h1>

        {/* Conditional rendering based on showAnalysisCard state */}
        {showAnalysisCard && (
          <div className="flex items-center justify-center bg-base-300 p-5">
            <div className="card w-full max-w-xl glass shadow-xl p-6 mb-6">
              <div className="card-body items-center">
                {/* Search bar and dataset selection */}
                <h3 className="text-2xl font-semibold">Enter Keyword</h3>
                <input
                  className="input input-warning input-bordered w-full max-w-xs"
                  type="text"
                  placeholder="Keyword"
                />

                {/* Dropdown to select the dataset */}
                <h3 className="text-2xl font-semibold mt-12">Select Dataset</h3>
                <select className="select select-warning w-full max-w-xs">
                  <option value="" disabled selected>
                    Choose Dataset
                  </option>
                  <option value="twitter">Twitter</option>
                  <option disabled value="facebook">
                    Facebook (Soon)
                  </option>
                </select>

                <button
                  className="btn btn-warning w-full max-w-xs text-xl mt-16"
                  onClick={handleGenerateReport}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    "Generate Report"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Conditional rendering based on showVisualization state */}
        {showVisualization && (
          <div className="flex items-center justify-center bg-base-300 p-5">
            <div className="card w-full glass shadow-xl p-6 mb-6">
              <div className="card-body items-center">
                <h3 className="text-2xl font-semibold p-6">
                  Choose Data Visualization To Display
                </h3>
                {/* Dropdown to select the type of visualization*/}
                <select
                  className="select select-warning"
                  onChange={handleVisualizationChange}
                  value={visualization}
                >
                  <option disabled value="">
                    Choose Visualization
                  </option>
                  <option value="Stacked Bar Chart">Stacked Bar Chart</option>
                  <option value="Line Chart">Line Chart</option>
                  <option value="Pie Chart">Pie Chart</option>
                </select>
              </div>

              {/* Visualization components */}
              {visualization === "Stacked Bar Chart" && (
                <SentimentStackedBarChart />
              )}
              {visualization === "Line Chart" && <SentimentLineChart />}
              {visualization === "Pie Chart" && <SentimentPieCharts />}

              <div className="flex justify-center p-2 py-10">
                <button className="btn btn-warning w-1/4 text-xl">
                  Save Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Analysis;

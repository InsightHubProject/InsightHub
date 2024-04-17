import React, { useState } from "react";

import Layout from "../components/Layout/Layout";

import VisualizationSection from "../components/Analysis/VisualizationSection"

const Analysis = () => {
  const [visualization, setVisualization] = useState("");
  const [showAnalysisCard, setShowAnalysisCard] = useState(true); // New state to control analysis card visibility
  const [showVisualization, setShowVisualization] = useState(false); // New state to control visualization visibility
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status
  const [useStaticData, setUseStaticData] = useState(false);

  const handleGenerateReport = () => {
    setIsLoading(true); // Start loading

    // Simulate report generation time (e.g., fetching data)
    setTimeout(() => {
      setShowVisualization(true);
      setShowAnalysisCard(false);
      setIsLoading(false); // Stop loading after the "report generation" is done
    }, 2000); // Simulate a 2-second loading process
  };

  return (
    <Layout>
      <div className="flex flex-col p-3 bg-base-300">
        <h1 className="text-4xl p-7 font-semibold flex justify-center">
          Analysis Page
        </h1>

        {/* Conditional rendering based on showAnalysisCard state */}
        {showAnalysisCard && (
          <div className="flex items-center justify-center bg-base-300 p-5">
            <div className="card w-full max-w-xl glass shadow-xl p-6 mb-6">
              <div className="card-body items-center">
                {/* Adjusted Search bar and dataset selection */}
                <div className="flex items-center justify-between w-full max-w-xs">
                  <h3 className="text-2xl font-semibold">Enter Keyword</h3>
                  <a className="tooltip" data-tip="Brands Available: Gucci, Nike, Tesla">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
                <input
                  className="input input-warning input-bordered w-full max-w-xs mt-2"
                  type="text"
                  placeholder="Keyword"
                />

                {/* Dataset selection aligned to the left */}
                <div className="w-full max-w-xs mt-8">
                  <h3 className="text-2xl font-semibold mb-4">Select Dataset</h3>
                  <select className="select select-warning w-full max-w-xs">
                    <option value="" disabled selected>
                      Choose Dataset
                    </option>
                    <option value="twitter">Twitter</option>
                    <option disabled value="facebook">
                      Facebook (Soon)
                    </option>
                  </select>
                </div>

                {/* Checkbox to use static data */}
                <div className="form-control mt-8">
                  <label className="label cursor-pointer mr-40">
                    <span className="label-text mr-4">Use Static Data</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-warning"
                      checked={useStaticData}
                      onChange={(e) => setUseStaticData(e.target.checked)}
                    />
                  </label>
                </div>

                {/* Generate report button */}
                <button
                  className="btn btn-warning w-full max-w-xs text-xl mt-8"
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
          <VisualizationSection />
        )}
      </div>
    </Layout>
  );
};

export default Analysis;

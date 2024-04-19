import React, { useState } from "react";

import Layout from "../components/Layout/Layout";

import Data from "../data/Brand_Data_Analyzed";

import VisualizationSection from "../components/Analysis/VisualizationSection";
import BrandNotFoundModal from "../components/Analysis/BrandNotFoundModal";

const Analysis = () => {
  const [showAnalysisCard, setShowAnalysisCard] = useState(true); // New state to control analysis card visibility
  const [showVisualization, setShowVisualization] = useState(false); // New state to control visualization visibility
  const [keyword, setKeyword] = useState("");
  const [actualKeyword, setActualKeyword] = useState(""); // New state to store the actual keyword
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status
  const [useStaticData, setUseStaticData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to capitalize the first letter of a word
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const handleGenerateReport = () => {
    setIsLoading(true);
    
    const brandName = capitalizeFirstLetter(keyword);

    if (useStaticData) {
      setTimeout(() => {
        const dataKey = Object.keys(Data).find(
          (key) => key === brandName
        );

        if (dataKey) {
          // The brand exists, you can proceed to generate the report
          console.log("Generating report for:", dataKey);
          setShowVisualization(true);
          setShowAnalysisCard(false);
          setActualKeyword(dataKey); // Storing the actual data key with the correct case
        } else {
          // The brand does not exist, handle the error appropriately
          console.log("Brand not found");
          setIsModalOpen(true); // Open the modal
        }

        setIsLoading(false);
      }, 2000);
    } else {
      console.log("Generating report from API");
    }
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
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevents the default form submission behavior
                  handleGenerateReport(); // Call your function to handle the submission
                }}
              >
                <div className="card-body items-center">
                  {/* Adjusted Search bar and dataset selection */}
                  <div className="flex items-center justify-between w-full max-w-xs">
                    <h3 className="text-2xl font-semibold">Enter Keyword</h3>
                    <a
                      className="tooltip"
                      data-tip="Brands Available: Gucci, Nike, Tesla"
                    >
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
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    required
                  />

                  {/* Brand not found modal */}
                  <BrandNotFoundModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />

                  {/* Dataset selection aligned to the left */}
                  <div className="w-full max-w-xs mt-8">
                    <h3 className="text-2xl font-semibold mb-4">
                      Select Dataset
                    </h3>
                    <select
                      className="select select-warning w-full max-w-xs"
                      required
                    >
                      <option value="" disabled selected hidden>
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
                    type="submit"
                    className="btn btn-warning w-full max-w-xs text-xl mt-8"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      "Generate Report"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Conditional rendering based on showVisualization state */}
        {showVisualization && <VisualizationSection keyword={actualKeyword} />}
      </div>
    </Layout>
  );
};

export default Analysis;

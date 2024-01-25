import React from "react";
import Layout from "../components/Layout";
import Sample_Report from "../assets/sample_report.png";

const Analysis = () => {
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
          {/* Dataset Section */}
          <select className="select select-warning">
            <option disabled selected>
              Choose Dataset
            </option>
            <option>Dataset1</option>
            <option>Dataset2</option>
          </select>
          <button className="btn btn-warning w-1/8 text-xl">
            Generate Report
          </button>
        </div>
        {/* Analysis Section */}
        <h3 className="text-2xl p-7 pt-12 font-semibold">Sample Report:</h3>
        <div className=" flex-col pb-16">
          {/* Data Visualization */}
          <div className="p-7">
            <select className="select select-warning">
              <option disabled selected>
                Choose Data Visualization To Display
              </option>
              <option>Bar Chart</option>
              <option>Pie Chart</option>
              <option>Bubble Chart</option>
            </select>
          </div>
          {/* Sample Report */}
          <div className="flex justify-center p-2">
            <img className="w-1/2" src={Sample_Report} alt="Sample Report" />
          </div>
          <div className="flex justify-center p-2">
            <button className="btn btn-warning w-1/4 text-xl">
              Save Report
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;

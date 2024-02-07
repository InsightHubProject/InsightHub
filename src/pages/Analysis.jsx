import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Papa from "papaparse";
import Chart from '../components/Chart/Chart'; // Adjust the path as necessary

const Analysis = () => {
  const [csvData, setCsvData] = useState([]);
  const [transformedCsvData, setTransformedCsvData] = useState([]);

  useEffect(() => {
    async function fetchAndParseCSV() {
      const csvFileUrl = `${process.env.PUBLIC_URL}/assets/twitter_training.csv`;
      const response = await fetch(csvFileUrl);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);

      Papa.parse(csv, {
        complete: (result) => {
          console.log("Parsed:", result.data);
          const transformedData = result.data.map(item => ({
            category: item.category, // Adjust according to your CSV column headers
            value: parseFloat(item.value) // Assuming 'value' is a column in your CSV
          }));
          setTransformedCsvData(transformedData);
        },
        header: true,
      });
    }

    fetchAndParseCSV();
  }, []);

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
          <select className="select select-warning" defaultValue="">
            <option disabled value="">Choose Dataset</option>
            <option>Dataset1</option>
            <option>Dataset2</option>
          </select>
          <button className="btn btn-warning w-1/8 text-xl">Generate Report</button>
        </div>

        {/* Analysis Section */}
        <h3 className="text-2xl p-7 pt-12 font-semibold">Sample Report:</h3>
        <div className="flex-col pb-16">
          <div className="p-7">
            <select className="select select-warning" defaultValue="">
              <option disabled value="">Choose Data Visualization To Display</option>
              <option>Bar Chart</option>
              <option>Pie Chart</option>
              <option>Bubble Chart</option>
            </select>
          </div>
          <div className="flex justify-center p-2">
            <button className="btn btn-warning w-1/4 text-xl">Save Report</button>
          </div>
          {/* Display CSV Data */}
          {transformedCsvData.length > 0 && (
            <Chart csvData={transformedCsvData} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
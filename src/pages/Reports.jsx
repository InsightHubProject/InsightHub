import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Reports = () => {
  const navigate = useNavigate();

  const handleRowClick = (reportId) => {
    navigate(`/reports/${reportId}`);
  };

  return (
    <Layout>
      <div className="flex flex-col p-3 bg-base-300">
        <h1 className="text-4xl p-7 font-semibold flex justify-center">Reports Page</h1>
        <div className="overflow-x-auto p-12 pb-32">
          <table className="table glass text-2xl">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Brand</th>
                <th>Dataset</th>
                <th>Visualization</th>
              </tr>
            </thead>
            <tbody>
              {/* Adding hover effect with hover:bg-base-200 for light theme */}
              <tr onClick={() => handleRowClick('1')} className="cursor-pointer hover:bg-base-300 transition-colors duration-150">
                <th>1</th>
                <td className="py-8">Sample Report 1</td>
                <td>Gucci</td>
                <td>Twitter</td>
                <td>Bar Chart</td>
              </tr>
              <tr onClick={() => handleRowClick('2')} className="cursor-pointer hover:bg-base-300 transition-colors duration-150">
                <th>2</th>
                <td className="py-8">Sample Report 2</td>
                <td>Nike</td>
                <td>Twitter</td>
                <td>Pie Chart</td>
              </tr>
              <tr onClick={() => handleRowClick('3')} className="cursor-pointer hover:bg-base-300 transition-colors duration-150">
                <th>3</th>
                <td className="py-8">Sample Report 3</td>
                <td>Tesla</td>
                <td>Facebook</td>
                <td>Bubble Chart</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;

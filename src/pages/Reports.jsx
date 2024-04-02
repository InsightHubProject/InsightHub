import React from "react";
import Layout from "../components/Layout/Layout";

const Reports = () => {
  return (
    <Layout>
      <div className="flex flex-col p-3 bg-base-300">

        <h1 className="text-4xl p-7 font-semibold flex justify-center">
          Reports Page
        </h1>

        <div className="overflow-x-auto p-12 pb-32">
        <table className="table table-zebra glass text-2xl">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Type</th>
                <th>Dataset</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td className="py-8">Sample Report 1</td>
                <td>Bar Chart</td>
                <td>Dataset1</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td className="py-8">Sample Report 2</td>
                <td>Pie Chart</td>
                <td>Dataset2</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td className="py-8">Sample Report 3</td>
                <td>Bubble Chart</td>
                <td>Dataset1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Layout from "../components/Layout/Layout";

import { SentimentStackedBarChart } from "../components/Analysis/Charts/SentimentStackedBarChart";
import { SentimentLineChart } from "../components/Analysis/Charts/SentimentLineChart";
import { SentimentPieCharts } from "../components/Analysis/Charts/SentimentPieChart";

const ReportDetail = () => {
  const { reportId } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      // Assuming 'userID' is available
      const userID = "oKrDAG6ANQbCvIuhiZl2Crelpar1"; // Replace with actual user ID
      const reportRef = doc(db, `users/${userID}/user_reports`, reportId);

      try {
        const docSnap = await getDoc(reportRef);

        if (docSnap.exists()) {
          const reportData = docSnap.data();
          setReport(reportData);
        } else {
          console.log("No such report!");
        }
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };

    fetchReport();
  }, [reportId]); // Dependency array includes reportId to refetch if it changes

  return (
    <Layout>
      <div className="flex flex-col p-3 bg-base-300">
        <h1 className="text-4xl p-7 font-semibold flex justify-center">
          Report Details
        </h1>
        {report ? (
          <div>
            {/* ...other report details */}
            {report.visualization === "Stacked Bar Chart" && (
              <SentimentStackedBarChart
                brandName={report.brand}
                brandData={report.data.map((item) => [item.year, ...item.data])}
              />
            )}
            {report.visualization === "Line Chart" && (
              <SentimentLineChart
                brandName={report.brand}
                brandData={report.data.map((item) => [item.year, ...item.data])}
              />
            )}
            {report.visualization === "Pie Chart" && (
              <SentimentPieCharts
                brandName={report.brand}
                brandData={report.data.map((item) => [item.year, ...item.data])}
              />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen bg-base-300">
            <span className="loading loading-spinner text-warning"></span>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ReportDetail;

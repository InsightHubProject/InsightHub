import React, { useState } from 'react';
import { SentimentStackedBarChart } from './Charts/SentimentStackedBarChart';
import { SentimentLineChart } from './Charts/SentimentLineChart';
import { SentimentPieCharts } from './Charts/SentimentPieChart';

const VisualizationSection = ({ keyword, brandData }) => {
    const [visualization, setVisualization] = useState('');

    const handleVisualizationChange = (e) => {
        console.log(brandData);
        setVisualization(e.target.value);
    };

    return (
        <div className="flex items-center justify-center bg-base-300 p-5">
            <div className="card w-full glass shadow-xl p-6 mb-6">
                <div className="card-body items-center">
                    <h3 className="text-2xl font-semibold p-6">
                        Choose Data Visualization To Display
                    </h3>
                    <select
                        className="select select-warning select-bordered w-full max-w-xs mb-12"
                        onChange={handleVisualizationChange}
                        value={visualization}
                    >
                        <option disabled value="">
                            Choose Visualization Type
                        </option>
                        <option value="Stacked Bar Chart">Stacked Bar Chart</option>
                        <option value="Line Chart">Line Chart</option>
                        <option value="Pie Chart">Pie Chart</option>
                    </select>
                </div>

                {visualization === 'Stacked Bar Chart' && (
                    <SentimentStackedBarChart
                        brandName={keyword}
                        brandData={brandData}
                    />
                )}
                {visualization === 'Line Chart' && (
                    <SentimentLineChart
                        brandName={keyword}
                        brandData={brandData}
                    />
                )}
                {visualization === 'Pie Chart' && (
                    <SentimentPieCharts
                        brandName={keyword}
                        brandData={brandData}
                    />
                )}

                {/* Conditional rendering of Save Report button */}
                {visualization && (
                    <div className="flex justify-center p-2 py-10">
                        <button className="btn btn-warning w-1/4 text-xl">
                            Save Report
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisualizationSection;

import React, { useState } from 'react';
import { SentimentStackedBarChart } from './Charts/SentimentStackedBarChart';
import { SentimentLineChart } from './Charts/SentimentLineChart';
import { SentimentPieCharts } from './Charts/SentimentPieChart';

import BrandDataAnalyzed from '../../data/Brand_Data_Analyzed';

const VisualizationSection = () => {
    const [visualization, setVisualization] = useState('');

    const handleVisualizationChange = (e) => {
        setVisualization(e.target.value);
    };

    return (
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
                {visualization === 'Stacked Bar Chart' && (
                    <SentimentStackedBarChart
                        brandName="Gucci"
                        brandData={BrandDataAnalyzed}
                    />
                )}
                {visualization === 'Line Chart' && (
                    <SentimentLineChart
                        brandName="Gucci"
                        brandData={BrandDataAnalyzed}
                    />
                )}
                {visualization === 'Pie Chart' && (
                    <SentimentPieCharts
                        brandName="Gucci"
                        brandData={BrandDataAnalyzed}
                    />
                )}

                <div className="flex justify-center p-2 py-10">
                    <button className="btn btn-warning w-1/4 text-xl">
                        Save Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VisualizationSection;
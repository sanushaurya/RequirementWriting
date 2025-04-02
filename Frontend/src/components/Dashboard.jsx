// src/components/Dashboard.js
import React from 'react';

import UploadSection from './UploadSection';
import ResultsSection from './ResultsSection';

const Dashboard = () => {
    return (
        <div className="ml-16 md:ml-64 p-8">
            <UploadSection />
            <ResultsSection />
            <div className="mt-8 flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 hover:neon-border">
                    <i className="bi bi-file-earmark-word mr-2"></i>Export to Word
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 hover:neon-border">
                    <i className="bi bi-file-earmark-excel mr-2"></i>Export to Excel
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
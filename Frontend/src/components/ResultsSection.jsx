// src/components/ResultsSection.js
import React from 'react';

const ResultsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Functional Requirements */}
            <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Functional Requirements</h2>
                <div className="space-y-4">
                    {/* Requirements cards will be dynamically added here */}
                </div>
            </div>

            {/* Non-Functional Requirements */}
            <div className="glass rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Non-Functional Requirements</h2>
                <div className="space-y-4">
                    {/* Requirements cards will be dynamically added here */}
                </div>
            </div>
        </div>
    );
};

export default ResultsSection;
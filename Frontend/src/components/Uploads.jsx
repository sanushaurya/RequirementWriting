// src/components/Uploads.jsx
import React from 'react';

import UploadSection from './UploadSection';
import ResultsSection from './ResultsSection';

const Uploads = () => {
    return (
        <div 
            style={{
                background: '#0b192f',
                width: '100%', // Use full width of the parent container
                height: '100vh', // Set height to cover the full viewport height
                padding: '30px',
                boxSizing: 'border-box' // Ensure padding is included in the width and height calculation
            }}
        >
            <UploadSection />
            <ResultsSection />
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
                <button 
                    style={{ 
                        backgroundColor: '#2463eb', // Updated background color
                        color: 'white', 
                        padding: '12px 24px', 
                        borderRadius: '8px', 
                        transition: 'background-color 0.3s' 
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1C86EE'} // Hover effect
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2463eb'} // Reset hover effect
                >
                    <i className="bi bi-file-earmark-word" style={{ marginRight: '8px' }}></i>Export to Word
                </button>
                <button 
                    style={{ 
                        backgroundColor: '#2463eb', // Updated background color
                        color: 'white', 
                        padding: '12px 24px', 
                        borderRadius: '8px', 
                        transition: 'background-color 0.3s' 
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1C86EE'} // Hover effect
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2463eb'} // Reset hover effect
                >
                    <i className="bi bi-file-earmark-excel" style={{ marginRight: '8px' }}></i>Export to Excel
                </button>
            </div>
        </div>
    );
};

export default Uploads;
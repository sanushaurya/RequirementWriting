// src/components/ResultsSection.js
import React from 'react';

const ResultsSection = () => {
    return (
        <div 
            style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                width: '100%' // Ensure the parent div takes full width
            }}
        >
            {/* Functional Requirements */}
            <div 
                style={{ 
                    backgroundColor: '#15253a', // Example for glass effect
                    borderRadius: '12px', 
                    padding: '24px', 
                    flex: '1', // Allow the card to grow and fill space equally
                    marginRight: '16px' // Add space between the two cards
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ 
                        fontSize: '1.25rem', // Equivalent to text-xl
                        fontWeight: 'bold', 
                        color: 'white', 
                        margin: '0' // Remove default margin
                    }}>
                        Functional Requirements
                    </h2>
                </div>
                <div style={{ marginBottom: '16px' }}>
                    {/* Requirements cards will be dynamically added here */}
                </div>
            </div>

            {/* Non-Functional Requirements */}
            <div 
                style={{ 
                    backgroundColor: '#15253a', // Example for glass effect
                    borderRadius: '12px', 
                    padding: '24px', 
                    flex: '1' // Allow the card to grow and fill space equally
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ 
                        fontSize: '1.25rem', // Equivalent to text-xl
                        fontWeight: 'bold', 
                        color: 'white', 
                        margin: '0' // Remove default margin
                    }}>
                        Non-Functional Requirements
                    </h2>
                </div>
                <div style={{ marginBottom: '16px' }}>
                    {/* Requirements cards will be dynamically added here */}
                </div>
            </div>
        </div>
    );
};

export default ResultsSection;
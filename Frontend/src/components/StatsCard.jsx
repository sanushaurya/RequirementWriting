// src/components/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, icon, percentage, color }) => {
    return (
        <div style={{
            textAlign: 'left',
            height: '105px',
            width: '28%',
            background: 'rgb(21 37 58)', // Example for glass effect
            borderRadius: '1rem',
            padding: '1rem', // Adjusted padding for better fit
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Example shadow
            transition: 'transform 0.2s, box-shadow 0.2s', // Transition for hover effect
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Ensures space is distributed evenly
        }} className="expand-effect"
        onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'; // Scale up on hover
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Increase shadow on hover
        }}
        onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Reset shadow
        }}>
            {/* Title Section */}
            <div>
                <div style={{ color: '#A0AEC0', fontSize: '0.875rem', margin: 0 }}>{title}</div>
            </div>

            {/* Value and Icon Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-15px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>{value}</div>
                <div style={{
                    color: `${color}-200`,
                    backgroundColor: `${color}-400/10`,
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <i className={`bi ${icon}`} style={{ fontSize: '2.5rem' }}></i>
                </div>
            </div>

            {/* Percentage Section */}
            <div style={{ color: '#38A169', display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-arrow-up-right"></i>
                <div style={{ marginLeft: '0.25rem', fontSize: '0.875rem' }}>{percentage}</div>
            </div>
        </div>
    );
};

export default StatsCard;
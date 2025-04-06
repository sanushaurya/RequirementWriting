// src/components/RecentActivity.jsx
import React from 'react';

const RecentActivity = () => {
    // Common styles for activity items
    const activityItemStyle = {
        height: '65px',
        display: 'flex',
        alignItems: 'center',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        transition: 'background-color 0.2s',
        cursor: 'pointer',
    };

    const iconStyle = {
        padding: '0.5rem',
        borderRadius: '0.5rem',
        marginRight: '1rem',
    };

    return (
        <div style={{
            background: 'rgb(21 37 58)', // Example for glass effect
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '2rem'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Recent Activity</h2>
                <button style={{
                    color: '#06B6D4', // Tailwind's cyan-400
                    transition: 'color 0.2s',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#0EA5E9'} onMouseOut={(e) => e.currentTarget.style.color = '#06B6D4'}>
                    View All <i className="bi bi-chevron-right"></i>
                </button>
            </div>
            <div style={{ marginTop: '1rem' }}>
                {/* Activity Items */}
                <div style={activityItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <div style={{
                        ...iconStyle,
                        color: '#06B6D4', // Tailwind's cyan-400
                        backgroundColor: 'rgba(6, 182, 212, 0.1)', // Tailwind's cyan-400/10
                    }}>
                        <i className="bi bi-file-earmark-plus"></i>
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}> {/* Added textAlign: 'left' */}
                        <div style={{ fontWeight: '500' }}>New requirements uploaded</div>
                        <div style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>ECommerce Platform - 24 requirements</div>
                    </div>
                    <span style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>2 hours ago</span>
                </div>

                <div style={activityItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <div style={{
                        ...iconStyle,
                        color: '#06B6D4', // Tailwind's cyan-400
                        backgroundColor: 'rgba(6, 182, 212, 0.1)', // Tailwind's cyan-400/10
                    }}>
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}> {/* Added textAlign: 'left' */}
                        <div style={{ fontWeight: '500' }}>Requirements processing completed</div>
                        <div style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>Mobile Banking App - 56 requirements</div>
                    </div>
                    <span style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>Yesterday</span>
                </div>

                <div style={activityItemStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <div style={{
                        ...iconStyle,
                        color: '#FBBF24', // Tailwind's yellow-400
                        backgroundColor: 'rgba(251, 191, 36, 0.1)', // Tailwind's yellow-400/10
                    }}>
                        <i className="bi bi-exclamation-circle"></i>
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}> {/* Added textAlign: 'left' */}
                        <div style={{ fontWeight: '500' }}>Incomplete requirements detected</div>
                        <div style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>Healthcare Portal - 12 issues found</div>
                    </div>
                    <span style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>2 days ago</span>
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    return (
        <div 
            style={{ 
                top: '0px',
                position: 'fixed', 
                height: '100%', 
                width: '17%', // Set width to 25% of the full screen
                backgroundColor: 'rgb(22, 37, 58)' // Change this color as needed
            }} 
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '16px' }}>
                {/* Logo Section */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
                    <i className="bi bi-cpu" style={{ color: '#00BFFF', fontSize: '24px' }}></i>
                    <span style={{ color: 'white', fontWeight: 'bold', marginLeft: '8px' }}>AI Extractor</span>
                </div>
                
                {/* Navigation Links */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Link 
                        to="/dashboard" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: hoveredLink === 'dashboard' ? '#00FF7F' : 'white', // Change color on hover
                            textDecoration: 'none' 
                        }}
                        onMouseEnter={() => handleMouseEnter('dashboard')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="bi bi-house-door" style={{ marginRight: '8px', color: hoveredLink === 'dashboard' ? '#00FF7F' : 'white' }}></i>
                        <span>Dashboard</span>
                    </Link>
                    <Link 
                        to="/uploads" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: hoveredLink === 'upload' ? '#00FF7F' : 'white', // Change color on hover
                            textDecoration: 'none' 
                        }}
                        onMouseEnter={() => handleMouseEnter('upload')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="bi bi-upload" style={{ marginRight: '8px', color: hoveredLink === 'upload' ? '#00FF7F' : 'white' }}></i>
                        <span>Upload</span>
                    </Link>
                    <Link 
                        to="/settings" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: hoveredLink === 'settings' ? '#00FF7F' : 'white', // Change color on hover
                            textDecoration: 'none' 
                        }}
                        onMouseEnter={() => handleMouseEnter('settings')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="bi bi-gear" style={{ marginRight: '8px', color: hoveredLink === 'settings' ? '#00FF7F' : 'white' }}></i>
                        <span>Settings</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
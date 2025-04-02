import React, { useState } from 'react';

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
                    <a 
                        href="#" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: hoveredLink === 'dashboard' ? '#00FF7F' : 'white', // Change color on hover
                            textDecoration: 'none' 
                        }}
                        onMouseEnter={() => handleMouseEnter('dashboard')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="bi bi-house-door" style={{ marginRight: '8px', color: hoveredLink === 'dashboard' ? '#00FF7F' : '#00FF7F' }}></i>
                        <span>Dashboard</span>
                    </a>
                    <a 
                        href="#" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: hoveredLink === 'upload' ? '#00FF7F' : 'white', // Change color on hover
                            textDecoration: 'none' 
                        }}
                        onMouseEnter={() => handleMouseEnter('upload')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="bi bi-upload" style={{ marginRight: '8px', color: hoveredLink === 'upload' ? '#00FF7F' : '#00FF7F' }}></i>
                        <span>Upload</span>
                    </a>
                    <a 
                        href="#" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: hoveredLink === 'history' ? '#00FF7F' : 'white', // Change color on hover
                            textDecoration: 'none' 
                        }}
                        onMouseEnter={() => handleMouseEnter('history')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="bi bi-clock-history" style={{ marginRight: '8px', color: hoveredLink === 'history' ? '#00FF7F' : '#00FF7F' }}></i>
                        <span>History</span>
                    </a>
                    <a 
                        href="#" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: hoveredLink === 'settings' ? '#00FF7F' : 'white', // Change color on hover
                            textDecoration: 'none' 
                        }}
                        onMouseEnter={() => handleMouseEnter('settings')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <i className="bi bi-gear" style={{ marginRight: '8px', color: hoveredLink === 'settings' ? '#00FF7F' : '#00FF7F' }}></i>
                        <span>Settings</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
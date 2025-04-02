// src/pages/DashboardPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Chatbot from '../components/Chatbot';

const DashboardPage = () => {
    return (
        <div style={{ display: 'flex',width:'100%', height: '100vh' }}> {/* Full height of the viewport */}
            <div 
                style={{ 
                    flex: '0 0 17%', // Sidebar takes 25% of the width 
                    backgroundColor: '#f4f4f4' // Optional: background color for visibility 
                }}
            >
                <Sidebar />
            </div>
            <div 
                style={{ 
                    flex: '1', // Remaining space for the main content 
                    display: 'flex', 
                    flexDirection: 'column', // Stack children vertically 
                    position: 'relative' // Positioning context for the Chatbot 
                }}
            >
                <Dashboard />
                <div 
                    style={{ 
                        position: 'absolute', // Position the Chatbot absolutely 
                        bottom: '20px', // Distance from the bottom 
                        right: '20px', // Distance from the right 
                        width: '300px', // Adjust as needed 
                        height: '400px' // Adjust as needed 
                    }}
                >
                    <Chatbot />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

// src/pages/DashboardPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Chatbot from '../components/Chatbot';

const DashboardPage = () => {
    return (
        <div>
            <style>
                {`
                    .dashboard-container {
                        display: flex;
                        height: 100vh; /* Full height of the viewport */
                    }

                    .sidebar {
                        flex: 0 0 25%; /* Sidebar takes 25% of the width */
                        background-color: #f4f4f4; /* Optional: background color for visibility */
                    }

                    .main-content {
                        flex: 1; /* Remaining space for the main content */
                        display: flex;
                        flex-direction: column; /* Stack children vertically */
                        position: relative; /* Positioning context for the Chatbot */
                    }

                    .chatbot {
                        position: absolute; /* Position the Chatbot absolutely */
                        bottom: 20px; /* Distance from the bottom */
                        right: 20px; /* Distance from the right */
                        width: 300px; /* Adjust as needed */
                        height: 400px; /* Adjust as needed */
                    }
                `}
            </style>
            <div className="dashboard-container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <Dashboard />
                    <div className="chatbot">
                        <Chatbot />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

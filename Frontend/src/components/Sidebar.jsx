// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
    return (
        <div className="fixed h-full w-16 md:w-64 glass">
            <div className="flex flex-col h-full p-4">
                <div className="flex items-center space-x-4 mb-8">
                    <i className="bi bi-cpu text-neonBlue text-2xl"></i>
                    <span className="hidden md:inline text-white font-bold">AI Extractor</span>
                </div>
                <nav className="space-y-4">
                    <a href="#" className="flex items-center space-x-4 text-white hover:text-neonBlue">
                        <i className="bi bi-house-door"></i>
                        <span className="hidden md:inline">Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center space-x-4 text-white hover:text-neonBlue">
                        <i className="bi bi-upload"></i>
                        <span className="hidden md:inline">Upload</span>
                    </a>
                    <a href="#" className="flex items-center space-x-4 text-white hover:text-neonBlue">
                        <i className="bi bi-clock-history"></i>
                        <span className="hidden md:inline">History</span>
                    </a>
                    <a href="#" className="flex items-center space-x-4 text-white hover:text-neonBlue">
                        <i className="bi bi-gear"></i>
                        <span className="hidden md:inline">Settings</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
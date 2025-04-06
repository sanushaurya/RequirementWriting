// src/components/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import RecentActivity from './RecentActivity';
import UploadSection from './UploadSection';
import Chatbot from './Chatbot';

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh',backgroundColor:'rgb(11, 25, 47)' }}>
            <Sidebar />
            <main style={{ flex: 1, marginLeft: '20%', padding: '2rem' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    {/* Dashboard Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Dashboard</h1>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #38a169', // Tailwind's green-400
                            borderRadius: '0.5rem',
                            padding: '0.5rem 1rem'
                        }}>
                            <div style={{
                                width: '0.5rem',
                                height: '0.5rem',
                                backgroundColor: '#38a169', // Tailwind's green-400
                                borderRadius: '50%',
                                marginRight: '0.5rem'
                            }}></div>
                            <span>AI Engine: Active</span>
                        </div>
                    </div>
                    
                    {/* Stats Cards */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                        <StatsCard 
                            title="Total Requirements" 
                            value="427" 
                            icon="bi-file-earmark-text" 
                            percentage="+12.5% this month" 
                            color="green" // Use a string for the color prop
                        />
                        <StatsCard 
                            title="Processing Success" 
                            value="98.2%" 
                            icon="bi-check-circle" 
                            percentage="+2.1% from last week" 
                            color="green" // Use a string for the color prop
                        />
                        <StatsCard 
                            title="Projects" 
                            value="12" 
                            icon="bi-folder" 
                            percentage="No change this week" 
                            color="purple" // Use a string for the color prop
                        />
                    </div>
                    
                    {/* Recent Activity */}
                    <RecentActivity />

                    {/* Upload Area */}
                    <UploadSection />
                </div>

                {/* Chatbot */}
                <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 20 }}>
                    <Chatbot />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
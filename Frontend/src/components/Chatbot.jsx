import React from 'react';

const Chatbot = () => {
    const handleChatbotToggle = () => {
        alert('AI Assistant is here to help!');
    };

    return (
        <div 
            style={{
                position: 'fixed', // Fixed positioning
                bottom: '20px', // Distance from the bottom
                right: '20px', // Distance from the right
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background
                borderRadius: '50%', // Make it circular
                padding: '16px', // Padding inside the circle
                cursor: 'pointer', // Change cursor to pointer
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Optional shadow for depth
                transition: 'transform 0.3s', // Smooth transition for hover effect
            }}
            className="hover:scale-110" // Optional hover effect to scale up
            onClick={handleChatbotToggle}
        >
            <i className="bi bi-robot" style={{ fontSize: '2rem', color: '#00BFFF' }}></i> {/* Change color as needed */}
        </div>
    );
};

export default Chatbot;
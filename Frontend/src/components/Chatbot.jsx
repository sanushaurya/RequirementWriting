// src/components/Chatbot.js
import React from 'react';

const Chatbot = () => {
    const handleChatbotToggle = () => {
        alert('AI Assistant is here to help!');
    };

    return (
        <div className="fixed bottom-4 right-4 glass rounded-full p-4 cursor-pointer hover:neon-border" onClick={handleChatbotToggle}>
            <i className="bi bi-robot text-2xl text-neonBlue"></i>
        </div>
    );
};

export default Chatbot;
// src/components/LoginForm.js
import React from 'react';

const LoginForm = () => {
    const inputStyle = {
        width: '91%', // Full width
        padding: '1rem', // Padding for better appearance
        borderRadius: '0.5rem', // Rounded corners
        border: '1px solid rgba(255, 255, 255, 0.5)', // Light border
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
        color: 'white', // Text color
        fontSize: '1rem', // Font size for consistency
    };

    const buttonStyle = {
        width: '100%', // Full width
        padding: '1rem', // Padding for better appearance
        borderRadius: '0.5rem', // Rounded corners
        backgroundColor: '#3b82f6', // Button color
        color: 'white', // Text color
        border: 'none', // No border
        cursor: 'pointer', // Pointer cursor on hover
        transition: 'background-color 0.3s', // Smooth transition
        fontSize: '1rem', // Font size for consistency
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        window.location.href = 'http://localhost:5173/dashboard'; // Redirect to the dashboard
    };

    return (
        <form id="loginForm" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                style={inputStyle} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                style={inputStyle} 
                required 
            />
            <button 
                type="submit" 
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'} // Darker blue on hover
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'} // Original color
            >
                Sign In
            </button>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <button 
                    type="button" 
                    style={{
                        padding: '0.5rem 1rem', // Padding for the button
                        borderRadius: '0.5rem', // Rounded corners
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
                        color: 'white', // Text color
                        border: '1px solid rgba(255, 255, 255, 0.5)', // Light border
                        cursor: 'pointer', // Pointer cursor on hover
                    }}
                >
                    <i className="bi bi-google" style={{ marginRight: '0.5rem' }}></i> Sign in with Google
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
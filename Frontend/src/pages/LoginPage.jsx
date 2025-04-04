// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div style={{
            minHeight: '100vh', // Full height of the viewport
            display: 'flex',
            alignItems: 'center', // Center items vertically
            justifyContent: 'center', // Center items horizontally
            background: 'linear-gradient(45deg, rgb(14 30 57), rgb(17, 34, 64), rgb(21, 42, 76))', // Gradient background
            padding: '1rem',
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)', // Adjusted transparency for blending
                backdropFilter: 'blur(10px)', // Optional glass effect
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '2rem',
                width: '100%', // Full width of the container
                maxWidth: '600px', // Maximum width of the box
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Slightly stronger shadow for depth
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                }}>
                    <h1 style={{
                        fontSize: '1.875rem', // Equivalent to text-3xl
                        fontWeight: 'bold',
                        color: 'white', // Change text color to white for contrast
                        marginBottom: '0.5rem',
                    }}>AI Requirements Extractor</h1>
                    <p style={{
                        color: 'rgba(253, 253, 253, 0.7)', // Change paragraph color to a lighter shade
                    }}>Next-gen requirement analysis</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
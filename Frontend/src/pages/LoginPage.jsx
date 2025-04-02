// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div id="loginPage" className="min-h-screen gradient-bg flex items-center justify-center p-4">
            <div className="glass rounded-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white neon-text mb-2">AI Requirements Extractor</h1>
                    <p className="text-gray-400">Next-gen requirement analysis</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
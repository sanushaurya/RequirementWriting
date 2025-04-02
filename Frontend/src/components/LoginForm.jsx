// src/components/LoginForm.js
import React from 'react';

const LoginForm = () => {
    return (
        <form id="loginForm" className="space-y-6">
            <div>
                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg glass text-white" required />
            </div>
            <div>
                <input type="password" placeholder="Password" className="w-full p-3 rounded-lg glass text-white" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300 hover:neon-border">
                Sign In
            </button>
            <div className="flex items-center justify-center space-x-4 mt-4">
                <button type="button" className="flex items-center glass px-4 py-2 rounded-lg text-white">
                    <i className="bi bi-google mr-2"></i> Sign in with Google
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
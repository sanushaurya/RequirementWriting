import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage'; // Updated import to reflect the new UploadPage
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Settings from './components/Settings'; // Import the Settings component
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/uploads" element={<UploadPage />} /> {/* Updated route to /uploads */}
                <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
                <Route path="/settings" element={<Settings />} /> {/* Add the Settings route */}
            </Routes>
        </Router>
    );
};

export default App;
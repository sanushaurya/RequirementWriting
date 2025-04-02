// src/components/UploadSection.js
import React from 'react';

const UploadSection = () => {
    return (
        <div className="glass rounded-xl p-8 mb-8">
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <i className="bi bi-cloud-upload text-4xl text-neonBlue mb-4"></i>
                <p className="text-white mb-4">Drag and drop files here or click to upload</p>
                <input type="file" className="hidden" id="fileUpload" />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 hover:neon-border">
                    Choose File
                </button>
            </div>
        </div>
    );
};

export default UploadSection;
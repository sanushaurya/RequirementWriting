import React from 'react';

const UploadSection = () => {
    const handleFileUpload = () => {
        document.getElementById('fileUpload').click(); // Trigger the hidden file input
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file.name);
            // You can add your file upload logic here
        }
    };

    return (
        <div 
            style={{ 
                backgroundColor: 'rgb(21, 37, 58)', // Example for glass effect
                borderRadius: '12px', 
                padding: '32px', 
                marginBottom: '32px' 
            }}
        >
            <div 
                style={{ 
                    border: '2px dashed gray', 
                    borderRadius: '8px', 
                    padding: '32px', 
                    textAlign: 'center' 
                }}
            >
                <i 
                    className="bi bi-cloud-upload" 
                    style={{ fontSize: '2rem', color: '#00BFFF', marginBottom: '16px' }} // Icon color
                ></i>
                <p style={{ color: 'white', marginBottom: '16px' }}>
                    Drag and drop files here or click to upload
                </p>
                <input 
                    type="file" 
                    style={{ display: 'none' }} 
                    id="fileUpload" 
                    onChange={handleFileChange} // Handle file selection
                />
                <button 
                    style={{ 
                        backgroundColor: '#1E90FF', 
                        color: 'white', 
                        padding: '12px 24px', 
                        borderRadius: '8px', 
                        transition: 'background-color 0.3s' 
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1C86EE'} // Hover effect
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1E90FF'} // Reset hover effect
                    onClick={handleFileUpload} // Trigger file input on button click
                >
                    Choose File
                </button>
            </div>
        </div>
    );
};

export default UploadSection;
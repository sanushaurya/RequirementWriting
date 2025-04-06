// src/components/Settings.js
import React from 'react';
import Sidebar from './Sidebar';

const Settings = () => {
    return (
        <div style={{backgroundColor:'rgb(11, 25, 47)'}}>
            <Sidebar />
            <div style={{ padding: '2rem', flex: 1,marginLeft:'275px' }}>

                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem',textAlign:'left' }}>Settings</h1>

                {/* General Settings */}
                <div style={{
                    background: 'rgb(21 37 58)', // Glass effect
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem',textAlign:'left' }}>Account Settings</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        width: '6rem',
                                        height: '6rem',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(to right, #06B6D4, #3B82F6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}>
                                        JD
                                    </div>
                                    <button style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        right: '0',
                                        backgroundColor: '#06B6D4',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '0.5rem',
                                        width: '2rem',
                                        height: '2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <i className="bi bi-pencil-fill" style={{ fontSize: '0.875rem' }}></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem',textAlign:'left' }}>First Name</label>
                                        <input type="text" defaultValue="John" style={{
                                            width: '100%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '0.5rem',
                                            padding: '0.75rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                            boxSizing: 'border-box'
                                        }} onFocus={(e) => e.target.style.borderColor = '#06B6D4'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem',textAlign:'left' }}>Last Name</label>
                                        <input type="text" defaultValue="Doe" style={{
                                            width: '100%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '0.5rem',
                                            padding: '0.75rem',
                                            outline: 'none',
                                            transition: 'border-color 0.2s',
                                            boxSizing: 'border-box'
                                        }} onFocus={(e) => e.target.style.borderColor = '#06B6D4'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem',textAlign:'left' }}>Email</label>
                                    <input type="email" defaultValue="john.doe@example.com" style={{
                                        width: '100%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '0.5rem',
                                        padding: '0.75rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                        boxSizing: 'border-box'
                                    }} onFocus={(e) => e.target.style.borderColor = '#06B6D4'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' ,textAlign:'left'}}>Company</label>
                                    <input type="text" defaultValue="Acme Corp" style={{
                                        width: '100%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '0.5rem',
                                        padding: '0.75rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s',
                                        boxSizing: 'border-box'
                                    }} onFocus={(e) => e.target.style.borderColor = '#06B6D4'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div style={{
                    background: 'rgb(21 37 58)', // Glass effect
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem',textAlign:'left' }}>Preferences</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <h4 style={{ fontWeight: '500', marginBottom: '0.75rem',textAlign:'left' }}>Theme</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.1)', // Glass effect
                                    borderRadius: '0.5rem',
                                    padding: '1rem',
                                    border: '2px solid #06B6D4',
                                    cursor: 'pointer'
                                }}>
                                    <div style={{ width: '100%', height: '6rem', borderRadius: '0.5rem', background: 'linear-gradient(to bottom, #1F2937, #000000)', marginBottom: '0.5rem' }}></div>
                                    <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>Dark</div>
                                </div>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.1)', // Glass effect
                                    borderRadius: '0.5rem',
                                    padding: '1rem',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    cursor: 'pointer',
                                    opacity: '0.7'
                                }}>
                                    <div style={{ width: '100%', height: '6rem', borderRadius: '0.5rem', background: 'linear-gradient(to bottom, #F3F4F6, #FFFFFF)', marginBottom: '0.5rem' }}></div>
                                    <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>Light</div>
                                </div>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.1)', // Glass effect
                                    borderRadius: '0.5rem',
                                    padding: '1rem',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    cursor: 'pointer',
                                    opacity: '0.7'
                                }}>
                                    <div style={{ width: '100%', height: '6rem', borderRadius: '0.5rem', background: 'linear-gradient(to bottom, #4B0082, #FF1493)', marginBottom: '0.5rem' }}></div>
                                    <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>Nebula</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem',textAlign:'left' }}>Language</label>
                                <select style={{
                                    width: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '0.5rem',
                                    padding: '0.75rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s',
                                }} onFocus={(e) => e.target.style.borderColor = '#06B6D4'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>German</option>
                                    <option>Japanese</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem',textAlign:'left' }}>Time Zone</label>
                                <select style={{
                                    width: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '0.5rem',
                                    padding: '0.75rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s',
                                }} onFocus={(e) => e.target.style.borderColor = '#06B6D4'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}>
                                    <option>Pacific Time (UTC-8)</option>
                                    <option>Mountain Time (UTC-7)</option>
                                    <option>Central Time (UTC-6)</option>
                                    <option>Eastern Time (UTC-5)</option>
                                    <option>UTC</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontWeight: '500', marginBottom: '0.75rem',textAlign:'left' }}>Notifications</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <input type="checkbox" checked style={{ width: '1rem', height: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.25rem', cursor: 'pointer' }} />
                                    <span>Email notifications when requirements processing is complete</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <input type="checkbox" checked style={{ width: '1rem', height: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.25rem', cursor: 'pointer' }} />
                                    <span>Browser notifications</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <input type="checkbox" style={{ width: '1rem', height: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.25rem', cursor: 'pointer' }} />
                                    <span>Weekly reports and insights</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button style={{
                        background: 'linear-gradient(to right, #06B6D4, #3B82F6)',
                        color: 'white',
                        padding: '0.75rem 2rem',
                        borderRadius: '0.5rem',
                        fontWeight: '600',
                        transition: 'background 0.3s',
                        cursor: 'pointer',
                    }} onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #06B6D4, #2563EB)'} onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #06B6D4, #3B82F6)'}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
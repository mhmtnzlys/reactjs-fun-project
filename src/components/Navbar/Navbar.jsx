import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className='navbar'>
            <div className='main-navbar-container'>
                <div className='left-navbar'>
                    <div className="logo-container">
                        <h1>M</h1>
                    </div>
                </div>
                <div className='right-navbar'>
                    <div className='navbar-buttons'>
                        <button onClick={() => navigate('/')} className='navbar-button'>AboutUs1</button>
                        <button onClick={() => navigate('/contact')} className='navbar-button'>Contact2</button>
                        <button onClick={() => navigate('/aboutus')} className='navbar-button'>AboutUs3</button>
                        <button onClick={() => navigate('/contact')} className='navbar-button'>Contact4</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

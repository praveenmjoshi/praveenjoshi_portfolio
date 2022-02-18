import React from 'react';
import './header.css';
export default function Header(){
    return <>
        <header className="header-container">
                <img alt="" src="./profile.png" className='header-logo-mbl' />
                <a href="#about" className='app-logo-title' >
                    Praveen Joshi
                </a>
                <nav className="nav-container">
                <a href="#experience" className="nav-items">
                    Professional Experiance
                </a>
                <a href="#skills" className="nav-items">
                    Skills
                </a>
                <a href="#testimonials" className="nav-items">
                    Testimonials
                </a>
                </nav>
        </header>
    </>
}
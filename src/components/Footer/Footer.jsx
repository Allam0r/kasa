import React from 'react';
import logo from "../../assets/images/LOGO Footer.svg"
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-box'>
            <img className='footer-logo' src={logo} alt="Logo Kasa" />
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
import React from 'react';
import logo from "../../assets/images/LOGO.svg"
import Nav from '../Nav/Nav';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
         <img className='logo' src={logo} alt="Logo de l'agence Kasa" />   
         <Nav />
        </header>
    );
};

export default Header;
import React from 'react';
import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav-header'>
            <ul>
                <li>
                    <NavLink exact="true" to="/" className="link-home">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link-about">A Propos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
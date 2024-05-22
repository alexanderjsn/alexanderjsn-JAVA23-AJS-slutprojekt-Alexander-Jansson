import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <nav>
                <ul>
                    <li><Link to ="/Home">Home</Link></li>
                    <li><Link to ="/Schedule">My Schedule</Link></li>
                    <li><Link to ="/Settings">Settings</Link></li>
                </ul>
        </nav>
    );
}

export default Header;
import React from 'react';
import './css/Header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Header() {
    return (
        <Router>
        <nav>
                <ul>
                    <li><Link to ="/Home">Home</Link></li>
                    <li><Link to ="/Schedule">My Schedule</Link></li>
                    <li><Link to ="/Settings">Log out</Link></li>
                </ul>
        </nav>
        </Router>

    );
}

export default Header;
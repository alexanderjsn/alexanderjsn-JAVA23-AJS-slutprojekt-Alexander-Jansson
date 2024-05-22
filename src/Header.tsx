import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav>
                <ul>
                    <li><Link to ="/Home">Home</Link></li>
                    <li><Link to ="/Schedule">Home</Link></li>
                    <li><Link to ="/Settings">Home</Link></li>
                </ul>
        </nav>
    );
}

export default Header;
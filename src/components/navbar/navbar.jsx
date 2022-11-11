import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
        <div className='Navbar'>
            <div className='Logo'>
                <h1>Occulist</h1>
            </div>
            <div id="nav_bar_buttons">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/report">Report</Link></li>
                        <li><Link to="/database">Database</Link></li>
                        <li><Link to="/database">Log In</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <hr id="hr_tag"/>
        </>
     );
}

export default Navbar;
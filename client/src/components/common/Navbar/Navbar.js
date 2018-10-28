import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <nav className="nav clearfix">
            <div className="float-left">
                <span className="nav-link">LA</span>
                <Link className="nav-link" to="/">Home</Link>
            </div>
        </nav>
    )
}
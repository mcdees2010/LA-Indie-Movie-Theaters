import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    return(
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <img src="http://www.pidgi.net/wiki/images/f/fc/Logo_Star_Cup_-_Mario_Kart_8.svg" alt="Bulma: a modern CSS framework based on Flexbox" width="140" height="45"/>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/theatres" className="navbar-item">Special Events</Link>
                    <Link to="/new" className="navbar-item">add</Link>
                </div>
                <div className="navbar-end">
                {currentUser
                    ? (
                        <span>
                            <span>Welcome, {currentUser.name}</span>
                            <Link to="/logout" className="navbar-item">Logout</Link>
                        </span>
                    )
                    : (
                        <span>
                            <Link to="/login" className="navbar-item">Log In</Link>
                            <Link to="/signup" className="navbar-item">Sign Up</Link>
                        </span>
                    )
                }
                </div>
            </div>
        </nav>
    )
}
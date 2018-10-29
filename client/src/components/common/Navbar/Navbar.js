import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';

export default ({ currentUser }) => {
    return(
        <nav className="nav clearfix">
            <div className="float-left">
                <span className="nav-link">LA indies</span>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/theaters">Theaters</Link>
            </div>
            <div className="float-right">
                {currentUser
                    ? (
                        <span>
                            <span className="nav-link">Welcome, {currentUser.name}</span>
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </span>
                    )
                    : (
                        <span>
                            <Link className="nav-link" to="/login">Log In</Link>
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </span>
                    )
                }
               
            </div>
        </nav>
    )
}
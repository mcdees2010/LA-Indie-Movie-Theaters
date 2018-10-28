import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    return(
        <nav className="nav clearfix">
            <div className="float-left">
                <span className="nav-link">LA</span>
                <Link className="nav-link" to="/">Home</Link>
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
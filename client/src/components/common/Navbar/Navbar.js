import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default ({ currentUser }) => {
    return(
        <nav className="nav clearfix">
        <div className="float-left">
            <Link className="nav-link" to="/">LA-Movies</Link>
            <Link className="nav-link" to="/theatres">theatres</Link>
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
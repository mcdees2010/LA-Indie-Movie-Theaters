import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

export default ({ children, currentUser }) => {
    return(
        <div className="body">
            <Navbar currentUser={currentUser}/>
            <div className="container">
                {children}
            </div>
        </div>
    )
}
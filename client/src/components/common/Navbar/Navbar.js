import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

export default ({ currentUser }) => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">ShowtimeLA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            {currentUser 
                ? (
                    <Nav>
                        <Navbar.Brand as={Link} to="#">logged in as:</Navbar.Brand>
                        <Nav.Link as={Link} to="/profile">{currentUser.name}</Nav.Link>
                        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    </Nav>
                )
                : (
                    <Nav>
                        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                    </Nav>
                )
            }
            </Navbar.Collapse>
      </Navbar>
    )
}
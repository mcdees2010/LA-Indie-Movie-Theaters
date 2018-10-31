import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

export default ({ currentUser }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">La Movies</Nav.Link>
                <Nav.Link href="#pricing">Theatres</Nav.Link>
            </Nav>
            {currentUser 
                ? (
                    <Nav>
                        <Navbar.Brand>Welcome {currentUser.name}</Navbar.Brand>
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
    //     <nav className="nav clearfix">
    //     <div className="float-left">
    //         <Link className="nav-link" to="/">LA-Movies</Link>
    //         <Link className="nav-link" to="/theatres">theatres</Link>
    //     </div>
    //     <div className="float-right">
    //         {currentUser
    //             ? (
    //                 <span>
    //                     <span className="nav-link">Welcome, {currentUser.name}</span>
    //                     <Link className="nav-link" to="/logout">Logout</Link>
    //                 </span>
    //             )
    //             : (
    //                 <span>
    //                     <Link className="nav-link" to="/login">Log In</Link>
    //                     <Link className="nav-link" to="/signup">Sign Up</Link>
    //                 </span>
    //             )
    //         }
           
    //     </div>
    // </nav>
    )
}
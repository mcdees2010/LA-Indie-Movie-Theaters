import React, { Component } from 'react';
import './Home.css';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="pic">
                <h1>see what's playing in the world's movie capital.</h1>
                <Button className="button" href="/theatres" bsStyle="info">enter site</Button>
                <div>
                </div>
            </div>
        );
    }
}

export default Home;

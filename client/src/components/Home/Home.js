import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
    state = { 
        theatres: [],
        message: "Loading"
    };
    async componentDidMount() {
        let response  = await axios.get('/api/theatres');
        let { theatres } = response.data;
        if (theatres.length > 0) {
            this.setState({ theatres, message: "Theatres Loaded" });
        } else {
            this.setState({ message: "No theatres to display." })
        }
    }
    renderTheatres = () => {
        return this.state.theatres.map(t => {
            return (
                <ul>
                    <li>{t}</li>
                </ul>  
            )
        })
    }
    render() {
        let { theatres, message } = this.state;
        let { renderTheatres } = this;
        if (theatres.length === 0) return <h2>{message}</h2>
        return (
            <div>
                <h1>Welcome!</h1>
                <div>
                    {renderTheatres()}
                </div>
            </div>
        );
    }
}

export default Home;
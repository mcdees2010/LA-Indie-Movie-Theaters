import React, { Component } from 'react';
import axios from 'axios';
import TheatreContainer from '../Theatre/TheatreContainer';

class Home extends Component {
    state = { 
        theatres: [],
        message: "Loading"
    };
    async componentDidMount() {
        let response  = await axios.get('/api/theatres');
        // console.log(response.data.theatres)
        let { theatres } = response.data;
        this.setState({ theatres: theatres})
    }
    render() {
        let { theatres, message } = this.state;
        if (theatres.length === 0) return <h2>{message}</h2>
        return (
            <div>
                <h1>Welcome!</h1>
                <div>
                    <div>
                        <TheatreContainer theatre={theatres}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
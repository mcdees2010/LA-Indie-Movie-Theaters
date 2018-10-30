import React, { Component } from 'react';
import axios from 'axios';
import Theatre from './Theatre';
import sample from './sample.json';

class Theatres extends Component {
    state = { 
        theatres: [],
        message: "Loading"
    };
    async componentDidMount() {
        console.log("sample", sample)
        let response  = await axios.get('/api/theatres');
        let { theatres } = response.data;
        this.setState({ theatres: theatres})
    }
    render() {
        let { theatres, message } = this.state;
        if (theatres.length === 0) return <h2>{message}</h2>
        return (
            <div>
                <div>
                    <div>
                        <Theatre theatre={theatres}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Theatres;

import React, { Component } from 'react';
import axios from 'axios';
import ControlledCarousel from './Carousel';
import { Link } from 'react-router-dom';

class Theatres extends Component{
    state = {
        theatres: []
    }
    async componentDidMount(){
        let resTheatres = await axios.get('https://api.internationalshowtimes.com/v4/cinemas/?location=34.001595,-118.48234&distance=30&apikey=RhuZxXz2vTqfvHw7sfhlcLt8UMevNdgw');
        let { cinemas } = resTheatres.data;
        this.setState({ theatres: cinemas})
    }
    render(){
        let { theatres } = this.state; 
        return(
            <div>
                <ControlledCarousel/>
                <ul>
                {theatres.map(({name, id}) => 
                        <li key={id}>
                            <Link to={`theatres/${id}`}>{name}</Link>
                        </li>
                )}
                </ul>
            </div>
        )
    }
}

export default Theatres;
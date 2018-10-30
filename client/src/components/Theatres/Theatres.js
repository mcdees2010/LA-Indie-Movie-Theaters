import React, { Component } from 'react';
import axios from 'axios';
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
                {theatres.map((t, i) => 
                    <ul>
                        <li key={i.id}>
                            <Link to={'/'}>{t.name}</Link>
                        </li>
                    </ul>
                )}
            </div>
        )
    }
}

export default Theatres;
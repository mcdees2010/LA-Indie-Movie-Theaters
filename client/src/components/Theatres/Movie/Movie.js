import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component{
    state = {
        movies: []
    }
    async componentDidMount(){
        let { id } = this.props.match.params;
        let movieData = await axios.get(`https://api.internationalshowtimes.com/v4/movies/?cinema_id=${id}&apikey=RhuZxXz2vTqfvHw7sfhlcLt8UMevNdgw`);
        console.log(movieData)
    }
    render(){
        return(
            <h1>hello</h1>
        )
    }
}

export default Movie;
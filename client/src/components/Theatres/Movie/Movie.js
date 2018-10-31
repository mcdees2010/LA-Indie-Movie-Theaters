import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component{
    state = {
        movies: []
    }
    async componentDidMount(){
        let { id } = this.props.match.params;
        let movieData = await axios.get(`https://api.internationalshowtimes.com/v4/movies/?cinema_id=${id}&apikey=RhuZxXz2vTqfvHw7sfhlcLt8UMevNdgw`);
        let movies = movieData.data.movies;
        console.log(movies)
        this.setState({ movies })
    }
    render(){
        let { movies } = this.state;
        return(
            <div>
                {movies.map((m, i) =>
                    <ul>
                        <li key={i}>
                            {m.title}
                        </li>
                        <img src={m.poster_image_thumbnail}/>
                    </ul>
                )}
            </div>
        )
    }
}

export default Movie;
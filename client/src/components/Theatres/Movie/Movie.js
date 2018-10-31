import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component{
    state = {
        movies: []
    }
    constructMovie({title, id, poster_image_thumbnail}){
        let movie = { title, id, poster_image_thumbnail, showtimes: []};
        return movie;
    }
    async componentDidMount(){
        let { id } = this.props.match.params;
        let movieData = await axios.get(`https://api.internationalshowtimes.com/v4/movies/?cinema_id=${id}&apikey=RhuZxXz2vTqfvHw7sfhlcLt8UMevNdgw`);
        let showtimeData = await axios.get('https://api.internationalshowtimes.com/v4/showtimes/?cinema_id=40216&apikey=RhuZxXz2vTqfvHw7sfhlcLt8UMevNdgw');
        console.log(showtimeData)
        let { movies } = movieData.data;
        
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
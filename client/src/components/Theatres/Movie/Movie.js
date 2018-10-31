import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        let showtimeData = await axios.get(`https://api.internationalshowtimes.com/v4/showtimes/?cinema_id=${id}&apikey=RhuZxXz2vTqfvHw7sfhlcLt8UMevNdgw`);
        // console.log(showtimeData.data.showtimes)
        let { movies } = movieData.data;
        let { showtimes } = showtimeData.data;
        movies = movies.map(this.constructMovie);
        // console.log(movies);
        movies.forEach((movie => {
            showtimes.forEach((show => {
                if (movie.id === show.movie_id){
                    movie.showtimes.push({time: show.start_at, tickets: show.booking_link})
                }
            }))
        }))
        this.setState({ movies });
    }
    render(){
        let { movies } = this.state;
        return(
            <div>
                <ul>
                {movies.map(({id, title, poster_image_thumbnail, showtimes}) =>
                        <li key={id}>
                            {title}
                            <img src={poster_image_thumbnail}/>
                            <ul>
                            {showtimes.map((s, i) => 
                                <li key={i}>
                                {s.time}
                                <p><a href={s.tickets}>get tickets</a></p>
                                </li>   
                            )}
                            </ul>
                        </li>
                )}
                </ul>
            </div>
        )
    }
}

export default Movie;
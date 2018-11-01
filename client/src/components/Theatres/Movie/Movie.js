import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/lib/Card';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';

class Movie extends Component{
    state = {
        movies: [],
        favorited: false
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
    favoriteMovie = async () => {
        let { id, title } = this.state.movies;
        let movie = await axios.post('/users', { title, id});
        if (movie.data.success) this.setState({ favorited: true}); 
    }
    unfavoriteMovie = async () => {
        let { id } = this.state.movies;
        let movie = await axios.delete(`/users/${id}`);
        if (movie.data.success) this.setState({favorited: false});
    }
    render(){
        let { movies } = this.state;
        return(
            <ul>
                {movies.map(({id, title, poster_image_thumbnail, showtimes}) =>
                     <li key={id}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={poster_image_thumbnail}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <button>seen it</button>
                <button>want to see</button>
                </Card.Text>
            </Card.Body>
            <ul>
                {showtimes.map((s, i) => 
            <ListGroup className="list-group-flush">
                <ListGroupItem key={i}>{s.time}
                <p><a href={s.tickets}>get tickets</a></p>
                </ListGroupItem>
            </ListGroup>
            )}
            </ul>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </li>
            )}
            </ul>
        )
    }
}

export default Movie;
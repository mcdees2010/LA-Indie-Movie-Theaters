import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Theatres/Movie/Movie';
import axios from 'axios';

class Favorites extends Component {
    state = {
        movie: undefined,
        loading: true
    }
    async componentDidMount(){
        let movies = await axios.get('/users');
        this.setState({ movie: movies.data.movies, loading: false})
    }
    render(){
        let { loading, movies } = this.state;
        if(loading) return <p>Loading....</p>
        return(
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h1>Favorites</h1>
                    </div>
                </div>
                <div className="row">
					<div className="column">
						{movies.length > 0
						? <Movie movies={movies}/>
						: <h1>No Favorites</h1>}
					</div>
				</div>
            </div>

        )
    }
}

export default Favorites;
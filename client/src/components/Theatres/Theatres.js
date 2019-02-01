import React, { Component } from 'react';
import axios from 'axios';
import ControlledCarousel from './Carousel';
import { Link } from 'react-router-dom';
import Form from '../common/Form/Form';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import './Theatres.css'

class Theatres extends Component{
    state = {
        theatres: [],
        theatre: ""
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let resTheatres = await axios.get('https://api.internationalshowtimes.com/v4/cinemas/?location=34.001595,-118.48234&distance=30&apikey=1OiDbZASAlNDSEU0BNUXIkOXPyhCpPUd');
        let { cinemas } = resTheatres.data;
        this.setState({ theatres: cinemas, theatre: ""})
      }
    handleChange = (e) => {
        let { name, value } = e.target 
        this.setState({ [name]: value})
    }
    render(){
        let { theatres } = this.state; 
        return(
            <div>
                <ControlledCarousel/>
                <Form
                    handleChange={this.handleChange}
                    theatre={this.state.theatre}
                    handleSubmit={this.handleSubmit}/>
                <ListGroup className="listgroup">
                {theatres.map(({name, id}) => 
                    <ListGroupItem key={id}>
                        <Link to={`theatres/${id}`}>{name}</Link>
                    </ListGroupItem>
                )}
                </ListGroup>
            </div>
        )
    }
}

export default Theatres;


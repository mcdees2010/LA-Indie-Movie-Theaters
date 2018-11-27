import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';
import './Profile.css';
import axios from 'axios';
import EditForm from '../EditForm/EditForm';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

class Profile extends Component{
    state = {
				user: httpClient.getCurrentUser(),
				favorites: undefined,
        editEnabled: false
    }
    async componentDidMount() {
        let res = await httpClient({ method: "get", url: `/api/users/${this.props.currentUser._id}` });
        let favorites = res.data.showUser.favorites;
        this.setState({ favorites});
    }
    handleDelete = async ({_id}) => {  
				let res = await axios.delete(`/api/favorites/${_id}`);
				this.setState({favorites:res.data.favorites})
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState( state =>{
					return {user: {...state.user, name:value}}
				})
    }
    handleSubmit = async (e) => {
        e.preventDefault();
				let { _id } = this.props.currentUser;
				let  { name, email } = this.state.user
        let user = await httpClient.authenticate({name, email}, `/api/users/${_id}`, "patch");
				this.props.onUpdateSuccess()
        this.setState({ 
            editEnabled: false
        })
    }
    handleClick = () => {
        let editEnabled = !this.state.editEnabled
        this.setState({ editEnabled })
    }
    render(){
				let { user,editEnabled, favorites } = this.state;
				let { name, email } = user
				let {currentUser} = this.props
        let { handleDelete, handleChange, handleClick, handleSubmit } = this;
        if (!user) return <div></div>
        return(
            <div className="container">
            <Jumbotron fluid>
            <Container className="profileinfo">
                <h3 className="name">{currentUser.name} | {currentUser.email}</h3>
            </Container>
            <div className="columns">
                <div className="column">
                {editEnabled
                    ? <EditForm
                        name={name}
                        email={email}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}/>
                    : <div><button onClick={handleClick} className="button">Edit Profile</button></div>
                }
                </div>
            </div>
            </Jumbotron>
            <div className="theatrebutton">
                    <Link to="/theatres"><Button bsStyle="primary">back to theatres</Button></Link>
            </div>
            <h3>Movies You Have Seen:</h3>
            <ul>
                {favorites && favorites.map(({title, _id, seen}) => {
                    if(seen === true){
                        return <li key={_id}>{title} <h1></h1><Button bsStyle="default" className="remove" onClick={() => handleDelete({_id})}>remove</Button></li>
                    }
                })}
            </ul> 
            <div class="wanttosee">
            <h3>Movies You Want To See:</h3>
            <ul>
                {favorites && favorites.map(({title, _id, wantToSee}) => {
                    if(wantToSee === true){
                        return <li key={_id}>{title} <h1></h1><Button bsStyle="default" className="remove" onClick={() => handleDelete({_id})}>remove</Button></li>
                    }
                })}
            </ul>
            </div>
            </div>
        )
    }
}

export default Profile;

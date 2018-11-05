import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Container from 'react-bootstrap/lib/Container';
import './Profile.css';
import axios from 'axios';
import EditForm from '../EditForm/EditForm';

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
            editEnabled: true
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
                <img style={{height: 50}}src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMTk2IDkwYzAgNDkuNzA3MDMxLTQwLjI5Mjk2OSA5MC05MCA5MHMtOTAtNDAuMjkyOTY5LTkwLTkwIDQwLjI5Mjk2OS05MCA5MC05MCA5MCA0MC4yOTI5NjkgOTAgOTB6bTAgMCIgZmlsbD0iIzQ2NWE2MSIvPjxwYXRoIGQ9Im0zNzYgOTBjMCA0OS43MDcwMzEtNDAuMjkyOTY5IDkwLTkwIDkwcy05MC00MC4yOTI5NjktOTAtOTAgNDAuMjkyOTY5LTkwIDkwLTkwIDkwIDQwLjI5Mjk2OSA5MCA5MHptMCAwIiBmaWxsPSIjM2I0YTUxIi8+PHBhdGggZD0ibTI5OC44OTg0MzggNDk2LjY5OTIxOS0yNS43OTY4NzYgMTUuMzAwNzgxLTc3LjEwMTU2Mi0xMzYuNjk5MjE5LTc3LjEwMTU2MiAxMzYuNjk5MjE5LTI1Ljc5Njg3Ni0xNS4zMDA3ODEgOTAtMTU5LjUgMTIuODk4NDM4IDcuODAwNzgxIDEyLjg5ODQzOC03LjgwMDc4MXptMCAwIiBmaWxsPSIjNDY1YTYxIi8+PHBhdGggZD0ibTI5OC44OTg0MzggNDk2LjY5OTIxOS0yNS43OTY4NzYgMTUuMzAwNzgxLTc3LjEwMTU2Mi0xMzYuNjk5MjE5di0zMC4zMDA3ODFsMTIuODk4NDM4LTcuODAwNzgxem0wIDAiIGZpbGw9IiMzYjRhNTEiLz48cGF0aCBkPSJtMzcyLjM2NzE4OCAyMTAuNDUzMTI1djExOS4wOTM3NWwxMzkuNjMyODEyIDM0LjY3MTg3NXYtMTg4LjQzNzV6bTAgMCIgZmlsbD0iIzNiNGE1MSIvPjxwYXRoIGQ9Im0wIDE4MHYxODBoMzkxdi0xODB6bTAgMCIgZmlsbD0iIzY5N2M4NiIvPjxwYXRoIGQ9Im0xOTYgMTgwaDE5NXYxODBoLTE5NXptMCAwIiBmaWxsPSIjNTk2Yzc2Ii8+PHBhdGggZD0ibTEwNiAxMzVjLTI0LjgxMjUgMC00NS0yMC4xODc1LTQ1LTQ1czIwLjE4NzUtNDUgNDUtNDUgNDUgMjAuMTg3NSA0NSA0NS0yMC4xODc1IDQ1LTQ1IDQ1em0wIDAiIGZpbGw9IiNlY2VjZjEiLz48cGF0aCBkPSJtMzE2IDIzMy43ODUxNTYgMjEuMjEwOTM4IDIxLjIxMDkzOC0yMS4yMTA5MzggMjEuMjEwOTM3LTIxLjIxMDkzOC0yMS4yMTA5Mzd6bTAgMCIgZmlsbD0iI2ZmNDk0OSIvPjxwYXRoIGQ9Im0yNTYgMjMzLjc4NTE1NiAyMS4yMTA5MzggMjEuMjEwOTM4LTIxLjIxMDkzOCAyMS4yMTA5MzctMjEuMjEwOTM4LTIxLjIxMDkzN3ptMCAwIiBmaWxsPSIjZmY0OTQ5Ii8+PHBhdGggZD0ibTEwNiA3NWMtOC4yNzczNDQgMC0xNSA2LjcyMjY1Ni0xNSAxNXM2LjcyMjY1NiAxNSAxNSAxNSAxNS02LjcyMjY1NiAxNS0xNS02LjcyMjY1Ni0xNS0xNS0xNXptMCAwIiBmaWxsPSIjNDY1YTYxIi8+PHBhdGggZD0ibTI4NiAxMzVjLTI0LjgxMjUgMC00NS0yMC4xODc1LTQ1LTQ1czIwLjE4NzUtNDUgNDUtNDUgNDUgMjAuMTg3NSA0NSA0NS0yMC4xODc1IDQ1LTQ1IDQ1em0wIDAiIGZpbGw9IiNlMmUyZTciLz48cGF0aCBkPSJtMjg2IDc1Yy04LjI3NzM0NCAwLTE1IDYuNzIyNjU2LTE1IDE1czYuNzIyNjU2IDE1IDE1IDE1IDE1LTYuNzIyNjU2IDE1LTE1LTYuNzIyNjU2LTE1LTE1LTE1em0wIDAiIGZpbGw9IiMzYjRhNTEiLz48L3N2Zz4K" />
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
            <h3>Movies You Have Seen:</h3>
            <ul>
                {favorites && favorites.map(({title, _id, seen}) => {
                    if(seen === true){
                        return <li key={_id}>{title}<button onClick={() => handleDelete({_id})}>remove</button></li>
                    }
                })}
            </ul>
            <h3>Movies You Want To See:</h3>
            <ul>
                {favorites && favorites.map(({title, _id, wantToSee}) => {
                    if(wantToSee === true){
                        return <li key={_id}>{title}<button onClick={() => handleDelete({_id})}>remove</button></li>
                    }
                })}
            </ul>
            </div>
        )
    }
}

export default Profile;

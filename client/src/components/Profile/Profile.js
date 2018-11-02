import React, {Component} from 'react';
import httpClient from '../../utilities/httpClient';

class Profile extends Component{
    state = {
        user: {}
    }
    async componentDidMount() {
        let res = await httpClient({ method: "get", url: `/api/users/${this.props.currentUser._id}` });
        let userData = res.data.showUser;
        console.log(userData)
        this.setState({ user: userData});
    }
    render(){
        let { user } = this.state;
        if (!user) return <div></div>
        return(
            <div className="container">
            <h3>{user.name}'s Profile</h3>
            <h3>{user.email}</h3>
            <ul>
                {user.favorites && user.favorites.map(({title, _id}) => {
                    return <li key={_id}>{title}</li>
                })}
            </ul>
            </div>
        )
    }
}

export default Profile;
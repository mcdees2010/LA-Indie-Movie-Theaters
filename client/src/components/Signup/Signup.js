import React, { Component } from 'react';
import httpClient from '../../utilities/httpClient';

class Signup extends Component {
    state = {
        email: "",
        password: "",
        name: ""
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value});
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let { email, password, name } = this.state;
        let user = await httpClient.authenticate({email, password, name}, "api/users", "post")
        this.setState({email: "", password: "", name: ""});
        if (user) {
            console.log(this.props)
            this.props.onSignupSuccess();
            this.props.history.push('/');
        }
    }
    render(){
        let { email, password, name } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div className="container">
                <h4>Sign Up:</h4>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={handleSubmit}>
                            <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="ex. John Smith"
                                    onChange={handleChange}
                                    value={name}/>
                                    <br />
                            <label>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="john@john.com"
                                    onChange={handleChange}
                                    value={email}/>
                                    <br />
                            <label>Password:</label>
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="enter your password..."
                                    onChange={handleChange}
                                    value={password}
                                    />
                                    <br />
                            <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
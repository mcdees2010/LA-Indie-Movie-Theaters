import React, { Component } from 'react';
import Header from '../common/Header/Header';
import httpClient from '../../utilities/httpClient';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value});
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        let user = await httpClient.authenticate({email, password}, "api/users/authenticate")
        this.setState({email: "", password: ""});
        if (user) {
            this.props.onLoginSuccess();
            this.props.history.push('/');
        }
    }
    render(){
        let { email, password } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div className="container">
                <Header text={"Login"}/>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={handleSubmit}>
                            <label>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="enter your email..."
                                    onChange={handleChange}
                                    value={email}/>
                            <label>Password:</label>
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="enter your password..."
                                    onChange={handleChange}
                                    value={password}
                                    />
                            <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
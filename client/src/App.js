import React, { Component } from 'react';
import Layout from './components/common/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import httpClient from './utilities/httpClient';
import Logout from './components/Logout/Logout';
import Signup from './components/Signup/Signup';
import Theatres from './components/Theaters/Theaters';


class App extends Component {
  state = { currentUser: httpClient.getCurrentUser()}
  onAuthSuccess = () => {
    this.setState({currentUser: httpClient.getCurrentUser()});
  }
  onLogout = () => {
    httpClient.logOut();
    this.setState({ currentUser: null});
  }
  render() {
    let { currentUser } = this.state;
    let { onAuthSuccess, onLogout } = this;
    return (
      <Layout currentUser={currentUser}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" render={(props) => {
                return <Login {...props} onLoginSuccess={onAuthSuccess}/>
              }}/>
              <Route path="/logout" render={() => {
                return <Logout onLogout={onLogout}/>
              }}/>
              <Route path="/signup" render={(props) => {
                return <Signup {...props} onSignupSuccess={onAuthSuccess}/>
              }}/>
              <Route path="/theatres" component={Theatres}/>
          </Switch>
      </Layout>
    )
  }
}

export default App;
